export type LinkItem = {
  id: string;
  title: string;
  url: string;
  description?: string;
};

export const profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  image: "/profile.svg",
};

export const links: LinkItem[] = [
  { id: "blog", title: "블로그", url: "https://velog.io", description: "개발 기록과 바이브코딩 일지" },
  { id: "github", title: "GitHub", url: "https://github.com", description: "만든 프로젝트 모음" },
  { id: "instagram", title: "Instagram", url: "https://instagram.com", description: "일상과 작업 소식" },
  { id: "youtube", title: "YouTube", url: "https://youtube.com", description: "코딩 영상" },
];
