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
        className="h-32 w-32 rounded-full object-cover ring-4 ring-white shadow-lg"
      />
      <h1 className="mt-5 text-2xl font-bold text-stone-900">{name}</h1>
      <p className="mt-1 text-base text-stone-600">{bio}</p>
    </header>
  );
}
