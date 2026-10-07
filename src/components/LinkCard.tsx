"use client";

import { useState } from "react";
import type { LinkItem } from "@/data/profile";

type Props = { link: LinkItem; count: number };

export default function LinkCard({ link, count }: Props) {
  const [clicks, setClicks] = useState(count);

  // 링크는 바로 열고, 클릭 수 기록은 뒤에서 처리 (실패해도 이동에는 영향 없음)
  function handleClick() {
    setClicks((c) => c + 1);
    fetch(`/api/click/${link.id}`, { method: "POST", keepalive: true }).catch(() => {});
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex min-h-14 items-center justify-between gap-3 rounded-3xl border border-white/60 bg-white/40 px-6 py-4 shadow-[0_8px_24px_-12px_rgba(180,100,50,0.35)] backdrop-blur-md transition duration-200 hover:-translate-y-px hover:bg-white/55 hover:shadow-[0_12px_28px_-12px_rgba(180,100,50,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
    >
      <span className="min-w-0">
        <span className="block truncate font-semibold text-stone-900">{link.title}</span>
        {link.description && (
          <span className="block truncate text-sm text-stone-500">{link.description}</span>
        )}
      </span>
      <span className="shrink-0 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-orange-800">
        {clicks.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
