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
            <Button text="Гайд новичка" />
          </Link>
          <Link href="/meets">
            <Button text="Календарь" />
          </Link>
          <Link href="/chats">
            <Button text="Чаты" />
          </Link>
          <Link href="/moves">
            <Button text="Регулярные активности" />
          </Link>
          <Link href="/bonus">
            <Button text="Ништяки и материалы" />
          </Link>
          <Link href="/help">
            <Button text="Написать куратору" />
          </Link>
        </div>
      </DarkSection>
    </Page>
  );
}
