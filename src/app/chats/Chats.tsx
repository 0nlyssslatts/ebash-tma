'use client';

import { DarkSection } from '@/components/ui/DarkSection';
import { Header } from '@/components/ui/Header';
import { Page } from '@/components/ui/Page';

export default function Chats() {
  return (
    <Page>
      <Header text="CHATS" />
      <DarkSection>
        <p className="text-lg">Для вступления тыкни на карточку</p>
      </DarkSection>
    </Page>
  );
}
