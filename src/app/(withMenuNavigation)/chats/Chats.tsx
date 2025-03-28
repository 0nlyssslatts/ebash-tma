'use client';

import { useEffect } from 'react';

import { ChatCard } from '@/components/Cards/ChatCard';
import { Page } from '@/components/Page';
import { DarkSection } from '@/components/ui/DarkSection';
import { Header } from '@/components/ui/Texts/Header';
import { Text } from '@/components/ui/Texts/Text';

interface ChatsPageData {
  header: string;
  chats: {
    title: string;
    descriptionShort: string;
    descriptionLong: string;
    color: string;
    href: string;
  }[];
}

export default function Chats(data: ChatsPageData) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      try {
        tg.requestFullscreen();
      } catch (error) {
        console.log(error);
        tg.expand();
      }
    }
  }, []);

  if (!data) {
    return (
      <Page>
        <div className="flex justify-center items-center h-screen">
          <p>Загрузка...</p>
        </div>
      </Page>
    );
  }

  return (
    <Page>
      <Header>{data.header}</Header>
      <DarkSection>
        <Text>Для вступления тыкни на карточку</Text>
      </DarkSection>
      <Text className="self-start my-5">Чаты</Text>
      <div className="grid grid-cols-2 gap-3">
        {data.chats.map((chat, index) => (
          <ChatCard
            key={index}
            href={chat.href}
            title={chat.title}
            descriptionShort={chat.descriptionShort}
            color={chat.color}
            descriptionLong={chat.descriptionLong}
          />
        ))}
      </div>
    </Page>
  );
}
