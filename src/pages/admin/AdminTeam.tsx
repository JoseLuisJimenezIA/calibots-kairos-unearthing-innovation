import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { uploadFile, deleteFile } from "@/lib/storage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Trash2, Plus, GripVertical } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type TeamMember = {
  id: string;
  name: string;
  member_role: string;
  label: string | null;
  photo_url: string | null;
  display_order: number;
};

const AdminTeam = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState({ name: "", member_role: "student", label: "" });
  const [photo, setPhoto] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    const { data } = await supabase
      .from("team_members")
      .select("*")
      .order("display_order");
    setMembers((data as TeamMember[]) ?? []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const handleAdd = async () => {
    setSaving(true);
    let photo_url: string | null = null;
    if (photo) {
      photo_url = await uploadFile("team-photos", photo);
    }
    const { error } = await supabase.from("team_members").insert({
      name: form.name,
      member_role: form.member_role,
      label: form.label || null,
      photo_url,
      display_order: members.length,
    });
    setSaving(false);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Integrante agregado" });
      setDialogOpen(false);
      setForm({ name: "", member_role: "student", label: "" });
      setPhoto(null);
      load();
    }
  };

  const handleDelete = async (m: TeamMember) => {
    if (!confirm(`¿Eliminar a ${m.name}?`)) return;
    if (m.photo_url) await deleteFile("team-photos", m.photo_url);
    await supabase.from("team_members").delete().eq("id", m.id);
    toast({ title: "Eliminado" });
    load();
  };

  if (loading) return <p className="text-muted-foreground">Cargando...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Integrantes del Equipo</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button><Plus className="h-4 w-4 mr-2" />Agregar</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nuevo Integrante</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input placeholder="Nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <select
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={form.member_role}
                onChange={(e) => setForm({ ...form, member_role: e.target.value })}
              >
                <option value="student">Estudiante</option>
                <option value="coach">Coach / Profesor</option>
              </select>
              <Input placeholder="Etiqueta (opcional)" value={form.label} onChange={(e) => setForm({ ...form, label: e.target.value })} />
              <Input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files?.[0] ?? null)} />
              <Button onClick={handleAdd} disabled={saving || !form.name} className="w-full">
                {saving ? "Guardando..." : "Guardar"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((m) => (
          <Card key={m.id} className="border-border overflow-hidden">
            {m.photo_url && (
              <img src={m.photo_url} alt={m.name} className="w-full h-48 object-cover" />
            )}
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">{m.name}</p>
                <p className="text-xs text-muted-foreground">
                  {m.member_role === "coach" ? "Coach" : "Estudiante"}
                  {m.label ? ` — ${m.label}` : ""}
                </p>
              </div>
              <Button variant="ghost" size="icon" onClick={() => handleDelete(m)}>
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminTeam;
