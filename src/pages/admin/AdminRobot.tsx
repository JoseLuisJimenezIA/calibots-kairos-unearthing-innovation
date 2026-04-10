import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { uploadFile, deleteFile } from "@/lib/storage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Trash2, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type RobotPhoto = {
  id: string;
  photo_url: string;
  model_name: string;
  description: string | null;
  display_order: number;
};

const AdminRobot = () => {
  const [photos, setPhotos] = useState<RobotPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState({ model_name: "", description: "" });
  const [file, setFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    const { data } = await supabase
      .from("robot_photos")
      .select("*")
      .order("display_order");
    setPhotos((data as RobotPhoto[]) ?? []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const handleAdd = async () => {
    if (!file) return;
    setSaving(true);
    const url = await uploadFile("robot-photos", file);
    if (url) {
      const { error } = await supabase.from("robot_photos").insert({
        photo_url: url,
        model_name: form.model_name || "Default",
        description: form.description || null,
        display_order: photos.length,
      });
      if (error) {
        toast({ title: "Error", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Foto del robot agregada" });
        setDialogOpen(false);
        setForm({ model_name: "", description: "" });
        setFile(null);
        load();
      }
    }
    setSaving(false);
  };

  const handleDelete = async (p: RobotPhoto) => {
    if (!confirm("¿Eliminar esta foto?")) return;
    await deleteFile("robot-photos", p.photo_url);
    await supabase.from("robot_photos").delete().eq("id", p.id);
    toast({ title: "Eliminada" });
    load();
  };

  if (loading) return <p className="text-muted-foreground">Cargando...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Fotos del Robot</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button><Plus className="h-4 w-4 mr-2" />Agregar Foto</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nueva Foto del Robot</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input placeholder="Nombre del modelo" value={form.model_name} onChange={(e) => setForm({ ...form, model_name: e.target.value })} />
              <Input placeholder="Descripción (opcional)" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              <Input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
              <Button onClick={handleAdd} disabled={saving || !file} className="w-full">
                {saving ? "Subiendo..." : "Guardar"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((p) => (
          <Card key={p.id} className="border-border overflow-hidden">
            <img src={p.photo_url} alt={p.model_name} className="w-full h-48 object-cover" />
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">{p.model_name}</p>
                {p.description && <p className="text-xs text-muted-foreground">{p.description}</p>}
              </div>
              <Button variant="ghost" size="icon" onClick={() => handleDelete(p)}>
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminRobot;
