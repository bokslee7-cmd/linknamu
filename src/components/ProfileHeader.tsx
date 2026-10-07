import Image from "next/image";

type Props = { name: string; bio: string; image: string };

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={image}
        alt={`${name} 프로필 사진`}
        width={128}
        height={128}
        priority
        unoptimized
        className="h-32 w-32 rounded-full object-cover ring-4 ring-white/80 shadow-[0_12px_28px_-8px_rgba(180,100,50,0.45),inset_0_-4px_8px_rgba(0,0,0,0.08)]"
      />
      <h1 className="mt-6 text-2xl font-bold text-stone-900">{name}</h1>
      <p className="mt-2 max-w-xs text-balance text-base leading-relaxed text-stone-600">{bio}</p>
    </header>
  );
}
