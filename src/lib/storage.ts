import { supabase } from "@/integrations/supabase/client";

export async function uploadFile(bucket: string, file: File): Promise<string | null> {
  const ext = file.name.split(".").pop();
  const path = `${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from(bucket).upload(path, file);
  if (error) {
    console.error("Upload error:", error);
    return null;
  }
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}

export async function deleteFile(bucket: string, url: string) {
  const parts = url.split(`/${bucket}/`);
  if (parts.length < 2) return;
  const path = parts[1];
  await supabase.storage.from(bucket).remove([path]);
}
