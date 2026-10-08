import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col gap-10 px-6 py-14">
      <ProfileHeader {...profile} />
      <LinkList links={links} />
    </main>
  );
}
