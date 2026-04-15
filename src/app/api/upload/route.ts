import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    const base64 = body.file;

    const matches = base64.match(/^data:(.+);base64,(.*)$/);
    if (!matches) throw new Error("Invalid file");

    const mime = matches[1];
    const buffer = Buffer.from(matches[2], "base64");

    let ext = "file";

    if (mime.includes("pdf")) ext = "pdf";
    else if (mime.includes("image")) ext = "png";
    else if (mime.includes("video")) ext = "mp4";

    const fileName = `mutamakin/${Date.now()}.${ext}`;

    const { error } = await supabase.storage
      .from("files")
      .upload(fileName, buffer, {
        contentType: mime,
      });

    if (error) throw error;

    const { data } = supabase.storage
      .from("files")
      .getPublicUrl(fileName);

    const publicUrl = data.publicUrl;

    let finalUrl = publicUrl;

    if (mime.includes("pdf")) {
      finalUrl = `https://docs.google.com/gview?url=${encodeURIComponent(publicUrl)}&embedded=true`;
    }

    return NextResponse.json({
      success: true,
      url: finalUrl,
      original_url: publicUrl,
      type: mime,
    });

  } catch (error) {
    console.error("UPLOAD ERROR:", error);

    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}