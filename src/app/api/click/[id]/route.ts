import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { incrementClick } from "@/lib/clicks";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  if (!links.some((l) => l.id === id)) {
    return NextResponse.json({ ok: false }, { status: 404 });
  }
  await incrementClick(id);
  return NextResponse.json({ ok: true });
}
