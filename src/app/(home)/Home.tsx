'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Page } from '@/components/Page';
import { Button } from '@/components/ui/Buttons/Button';
import { DarkSection } from '@/components/ui/DarkSection';
import { Header } from '@/components/ui/Texts/Header';
import { Text } from '@/components/ui/Texts/Text';
import { TextLight } from '@/components/ui/Texts/TextLight';

export default function Home() {
  if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
    const tg = window.Telegram.WebApp;
    try {
      tg.requestFullscreen();
    } catch (error) {
      console.log(error);
      tg.expand();
    }
  }

  const buttons = [
    { href: '/guide', text: 'Гайд новичка' },
    { href: '/meets', text: 'Календарь' },
    { href: '/chats', text: 'Чаты' },
    { href: '/moves', text: 'Регулярные активности' },
    { href: '/bonus', text: 'Ништяки и материалы' },
    { href: '/help', text: 'Написать куратору' },
  ];

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
          {buttons.map((button, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={button.href}>
                <Button>{button.text}</Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </DarkSection>
    </Page>
  );
}
