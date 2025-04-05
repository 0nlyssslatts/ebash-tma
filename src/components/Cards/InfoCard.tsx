'use client';

import { useRouter } from 'next/navigation';

import { SmallButton } from '../ui/Buttons/SmallButton';
import { TextLight } from '../ui/Texts/TextLight';

export function InfoCard({
  title,
  text,
  href,
  buttonText,
}: {
  title: string;
  text: string;
  href: string;
  buttonText: string;
}) {
  const router = useRouter();

  return (
    <div className="flex items-stretch min-h-[200px] rounded-lg p-6 shadow">
      <div className="flex items-center justify-center w-1/4 mr-2">
        <p className="text-4xl md:text-6xl font-blackout text-center">{title}</p>
      </div>

      <div className="w-px bg-[#96FFCE] mx-4 self-stretch" />

      <div className="flex flex-col justify-center flex-1 gap-4">
        <TextLight>{text}</TextLight>
        <SmallButton onClick={() => router.push(href)}>{buttonText}</SmallButton>
      </div>
    </div>
  );
}
