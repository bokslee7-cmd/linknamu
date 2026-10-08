import { NextResponse } from "next/server";
import { getClickCounts } from "@/lib/clicks";

export const dynamic = "force-dynamic";

// 모든 링크의 클릭 수를 { [id]: count } 형태로 한 번에 반환
export async function GET() {
  const counts = await getClickCounts();
  return NextResponse.json(counts, { headers: { "Cache-Control": "no-store" } });
}
