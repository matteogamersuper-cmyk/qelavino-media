import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase-server";

export const instant = false;

export default async function ChatPage({
  params,
}: {
  params: Promise<{ language: string }>;
}) {
  const { language } = await params;
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error && error.status !== 400 && error.status !== 401) {
    throw error;
  }

  if (!data?.claims?.sub) {
    notFound();
  }

  return (
    <main lang={language}>
      <h1>Benvenuto su Qelavino</h1>
      <p>Lingua corrente: {language}</p>
    </main>
  );
}