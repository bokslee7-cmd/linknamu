import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "링크나우 | 김클로",
  description: "내 모든 링크를 한 페이지에 모아 하나의 URL로 공유하세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
