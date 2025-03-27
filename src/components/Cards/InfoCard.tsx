'use client';

import { useRouter } from 'next/navigation';

import { SmallButton } from '../ui/Buttons/SmallButton';
import { TextLight } from '../ui/Texts/TextLight';

export function InfoCard({ title, text, href, buttonText }: { title: string; text: string; href: string; buttonText: string }) {
  const router = useRouter();

  return (
    <div className="flex justify-around items-center">
      <p className="flex-1 text-4xl md:text-6xl my-3 text-center font-blackout">{title}</p>
      <div className="h-[120px] w-px bg-[#96FFCE] mx-5"></div>
      <div className="flex-2 flex flex-col gap-2">
        <TextLight>{text}</TextLight>
        <SmallButton onClick={() => router.push(href)}>{buttonText}</SmallButton>
      </div>
    </div>
  );
}
