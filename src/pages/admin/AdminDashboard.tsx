import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Image, Bot } from "lucide-react";

const AdminDashboard = () => {
  const [counts, setCounts] = useState({ team: 0, gallery: 0, robot: 0 });

  useEffect(() => {
    const load = async () => {
      const [t, g, r] = await Promise.all([
        supabase.from("team_members").select("id", { count: "exact", head: true }),
        supabase.from("gallery_photos").select("id", { count: "exact", head: true }),
        supabase.from("robot_photos").select("id", { count: "exact", head: true }),
      ]);
      setCounts({
        team: t.count ?? 0,
        gallery: g.count ?? 0,
        robot: r.count ?? 0,
      });
    };
    load();
  }, []);

  const cards = [
    { label: "Integrantes", count: counts.team, icon: Users },
    { label: "Fotos Galería", count: counts.gallery, icon: Image },
    { label: "Fotos Robot", count: counts.robot, icon: Bot },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cards.map(({ label, count, icon: Icon }) => (
          <Card key={label} className="border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{label}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{count}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
