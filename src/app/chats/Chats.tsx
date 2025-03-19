'use client';

import { DarkSection } from '@/components/ui/DarkSection';
import { Header } from '@/components/ui/Header';
import { Page } from '@/components/ui/Page';
import { Text } from '@/components/ui/Text';

export default function Chats() {
  return (
    <Page>
      <Header>CHATS</Header>
      <DarkSection>
        <Text>Для вступления тыкни на карточку</Text>
      </DarkSection>
    </Page>
  );
}
