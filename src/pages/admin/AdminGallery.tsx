import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { uploadFile, deleteFile } from "@/lib/storage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Trash2, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type GalleryPhoto = {
  id: string;
  photo_url: string;
  caption: string | null;
  display_order: number;
};

const AdminGallery = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [caption, setCaption] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    const { data } = await supabase
      .from("gallery_photos")
      .select("*")
      .order("display_order");
    setPhotos((data as GalleryPhoto[]) ?? []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const handleAdd = async () => {
    if (!files?.length) return;
    setSaving(true);
    for (let i = 0; i < files.length; i++) {
      const url = await uploadFile("gallery", files[i]);
      if (url) {
        await supabase.from("gallery_photos").insert({
          photo_url: url,
          caption: caption || null,
          display_order: photos.length + i,
        });
      }
    }
    setSaving(false);
    toast({ title: `${files.length} foto(s) agregada(s)` });
    setDialogOpen(false);
    setCaption("");
    setFiles(null);
    load();
  };

  const handleDelete = async (p: GalleryPhoto) => {
    if (!confirm("¿Eliminar esta foto?")) return;
    await deleteFile("gallery", p.photo_url);
    await supabase.from("gallery_photos").delete().eq("id", p.id);
    toast({ title: "Foto eliminada" });
    load();
  };

  if (loading) return <p className="text-muted-foreground">Cargando...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Galería de Fotos</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button><Plus className="h-4 w-4 mr-2" />Agregar Fotos</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Subir Fotos</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input type="file" accept="image/*" multiple onChange={(e) => setFiles(e.target.files)} />
              <Input placeholder="Caption (opcional)" value={caption} onChange={(e) => setCaption(e.target.value)} />
              <Button onClick={handleAdd} disabled={saving || !files?.length} className="w-full">
                {saving ? "Subiendo..." : "Subir"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {photos.map((p) => (
          <div key={p.id} className="relative group rounded-lg overflow-hidden border border-border">
            <img src={p.photo_url} alt={p.caption ?? ""} className="w-full h-40 object-cover" />
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
              onClick={() => handleDelete(p)}
            >
              <Trash2 className="h-3 w-3" />
            </Button>
            {p.caption && (
              <p className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-1 truncate">
                {p.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminGallery;
