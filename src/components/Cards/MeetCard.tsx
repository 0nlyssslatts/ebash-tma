'use client';

import { useRouter } from 'next/navigation';

export function MeetCard({
  title,
  text,
  href,
  date,
  type,
  time,
}: {
  title: string;
  text: string;
  href: string;
  date: string;
  type: string;
  time: string;
}) {
  const router = useRouter();

  return (
    <div
      className="flex flex-col gap-2 rounded-lg border cursor-pointer py-3 px-2 w-30"
      onClick={() => router.push(href)}
    >
      <h3 className="text-lg self-start">{title}</h3>
      <div className="flex gap-2 whitespace-nowrap">
        <div className="rounded-2xl border text-textgreen px-2 border-gray-500">{date}</div>
        <div className="rounded-2xl border text-textgreen px-2 border-gray-500">{type}</div>
        <div className="rounded-2xl border text-textgreen px-2 border-gray-500">{time}</div>
      </div>
      <p className="text-sm self-start">{text}</p>
    </div>
  );
}
