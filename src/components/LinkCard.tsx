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
      className="flex min-h-14 items-center justify-between gap-3 rounded-2xl border border-stone-300 bg-white px-5 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-600 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
    >
      <span className="min-w-0">
        <span className="block truncate font-semibold text-stone-900">{link.title}</span>
        {link.description && (
          <span className="block truncate text-sm text-stone-500">{link.description}</span>
        )}
      </span>
      <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
        {clicks.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
