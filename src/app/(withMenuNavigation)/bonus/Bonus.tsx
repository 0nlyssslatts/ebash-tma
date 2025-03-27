'use client';

import { InfoCard } from '@/components/Cards/InfoCard';
import { Page } from '@/components/Page';
import { Header } from '@/components/ui/Texts/Header';

export default function Bonus() {
  return (
    <Page>
      <Header>BONUS</Header>
      <div className="flex flex-col gap-4">
        <InfoCard
          title="TEST"
          text="текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст "
          href="#"
          buttonText="Подробнее"
        />
        <InfoCard
          title="TEST"
          text="текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст "
          href="#"
          buttonText="Подробнее"
        />
        <div className="border rounded-xl p-3 text-sm">
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
          текст
        </div>
        <InfoCard
          title="TEST"
          text="текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст "
          href="#"
          buttonText="Подробнее"
        />
      </div>
    </Page>
  );
}
