import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const allowedAssets = new Set([
  "2-1.png",
  "flamingo bag A3.png",
  "IMG-20251003-WA0033.jpg",
  "IMG-20251003-WA0034.jpg",
  "IMG-20251003-WA0035.jpg",
  "IMG-20251003-WA0036.jpg",
  "Screenshot_20251219_075553_Gallery.jpg",
]);

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;
  if (!allowedAssets.has(name)) {
    return new NextResponse("Not found", { status: 404 });
  }

  const file = await readFile(path.join(process.cwd(), "docs", name));
  const contentType = name.endsWith(".png") ? "image/png" : "image/jpeg";
  return new NextResponse(file, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
