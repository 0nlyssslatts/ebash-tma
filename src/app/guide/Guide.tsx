'use client';

import { DarkSection } from '@/components/ui/DarkSection';
import { Header } from '@/components/ui/Header';
import { List } from '@/components/ui/List';
import { Page } from '@/components/ui/Page';
import { Section } from '@/components/ui/Section';
import { Text } from '@/components/ui/Text';
import { TextLight } from '@/components/ui/TextLight';
import { TextLighter } from '@/components/ui/TextLighter';

export default function Guide() {
  const check = ['f', 'wef', 'ewgr', 'wegwg', 'wegweg'];

  return (
    <Page>
      <Header>GUIDE</Header>
      <DarkSection>
        <Text>Какие у нас ценности?</Text>
        <TextLight>
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст
        </TextLight>
      </DarkSection>

      <Section>
        <Text>Чек-лист EБАШера</Text>
        <TextLighter>пункты кликабельные, нажимай на них</TextLighter>
        <List listArray={check} />
      </Section>
    </Page>
  );
}
