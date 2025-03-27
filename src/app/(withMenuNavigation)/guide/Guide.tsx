'use client';

import { Page } from '@/components/Page';
import { ClosingSection } from '@/components/ui/ClosingSection';
import { DarkSection } from '@/components/ui/DarkSection';
import { List } from '@/components/ui/List';
import { Section } from '@/components/ui/Section';
import { Header } from '@/components/ui/Texts/Header';
import { Text } from '@/components/ui/Texts/Text';
import { TextLight } from '@/components/ui/Texts/TextLight';
import { TextLighter } from '@/components/ui/Texts/TextLighter';

export default function Guide() {
  const check = [
    'ознакомиться со словарем подписки',
    'обратиться к кому-то из чата по имени и отчеству',
    'написать #интро в общий чат',
    'посмотреть все активности ЕБАШ',
    'посмотреть все активности ЕБАШ',
  ];

  return (
    <Page>
      <Header>GUIDE</Header>
      <ClosingSection header="Наши ценности">
        {' '}
        <TextLight>
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
          текст текст текст текст текст текст текст текст текст
        </TextLight>
      </ClosingSection>

      <Section>
        <Text>Чек-лист EБАШера</Text>
        <TextLighter>пункты кликабельные, нажимай на них</TextLighter>
        <List className="mt-3" listArray={check} />
      </Section>
      <ClosingSection header="Наши ценности">
        {' '}
        <TextLight>
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
          текст текст текст текст текст текст текст текст текст
        </TextLight>
      </ClosingSection>
      <ClosingSection header="Наши ценности">
        {' '}
        <TextLight>
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
          текст текст текст текст текст текст текст текст текст
        </TextLight>
      </ClosingSection>
      <ClosingSection header="Наши ценности">
        {' '}
        <TextLight>
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
          текст текст текст текст текст текст текст текст текст
        </TextLight>
      </ClosingSection>
      <ClosingSection header="Наши ценности">
        {' '}
        <TextLight>
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
          текст текст текст текст текст текст текст текст текст
        </TextLight>
      </ClosingSection>
      <ClosingSection header="Наши ценности">
        {' '}
        <TextLight>
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
          текст текст текст текст текст текст текст текст текст
        </TextLight>
      </ClosingSection>
      <ClosingSection header="Наши ценности">
        {' '}
        <TextLight>
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
          текст текст текст текст текст текст текст текст текст
        </TextLight>
      </ClosingSection>
    </Page>
  );
}
