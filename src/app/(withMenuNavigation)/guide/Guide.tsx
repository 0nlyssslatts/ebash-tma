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
  const check = ['ознакомиться со словарем подписки', 'обратиться к кому-то из чата по имени и отчеству', 'написать #интро в общий чат', 'посмотреть все активности ЕБАШ', 'посмотреть все активности ЕБАШ'];

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
        <List className='text-base mt-3' listArray={check} />
      </Section>
    </Page>
  );
}
