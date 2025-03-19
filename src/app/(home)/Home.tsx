'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import { DarkSection } from '@/components/ui/DarkSection';
import { Header } from '@/components/ui/Header';
import { Page } from '@/components/ui/Page';
import { Text } from '@/components/ui/Text';
import { TextLight } from '@/components/ui/TextLight';

export default function Home() {
  return (
    <Page>
      <Header>EBASH</Header>
      <DarkSection>
        <Text>Здарова, че бакланишь?</Text>
        <TextLight>
          Мы сообщество тех, кто стремится к саморазвитию, ответственности за свою жизнь и осознанному подходу к ней. Не
          просто работаем, а вкладываемся на полную во все сферы жизни: от работы и учёбы до отдыха и личного роста
        </TextLight>
        <div className="flex flex-col gap-2 mt-4">
          <Link href="/guide">
            <Button>Гайд новичка</Button>
          </Link>
          <Link href="/meets">
            <Button>Календарь</Button>
          </Link>
          <Link href="/chats">
            <Button>Чаты</Button>
          </Link>
          <Link href="/moves">
            <Button>Регулярные активности</Button>
          </Link>
          <Link href="/bonus">
            <Button>Ништяки и материалы</Button>
          </Link>
          <Link href="/help">
            <Button>Написать куратору</Button>
          </Link>
        </div>
      </DarkSection>
    </Page>
  );
}
