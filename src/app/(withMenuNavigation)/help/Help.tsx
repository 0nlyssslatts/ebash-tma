'use client';

import { Page } from '@/components/Page';
import { SmallButton } from '@/components/ui/Buttons/SmallButton';
import { DarkSection } from '@/components/ui/DarkSection';
import { Header } from '@/components/ui/Texts/Header';
import { Text } from '@/components/ui/Texts/Text';
import { TextLight } from '@/components/ui/Texts/TextLight';

export default function Help() {
  return (
    <Page>
      <Header>HELP</Header>
      <DarkSection>
        <Text>Какие у нас ценности?</Text>
        <TextLight>
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст
        </TextLight>
      </DarkSection>
      <SmallButton className='mt-6'>Написать в поддержку</SmallButton>
    </Page>
  );
}
