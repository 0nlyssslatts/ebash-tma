'use client';

import { useState } from 'react';

import { ChatCard } from '@/components/Cards/ChatCard';
import { ChatPopup } from '@/components/Cards/ChatPopup';
import { Page } from '@/components/Page';
import { DarkSection } from '@/components/ui/DarkSection';
import { MainLoader } from '@/components/ui/MainLoader';
import { Header } from '@/components/ui/Texts/Header';
import { Text } from '@/components/ui/Texts/Text';

interface ChatsPageData {
  header: string;
  chats: {
    title: string;
    description: string;
    color: string;
    href: string;
  }[];
}

interface CardPopupProps {
  title: string;
  href: string;
}

export default function Chats(data: ChatsPageData) {
  const [showPopup, setShowPopup] = useState<CardPopupProps>({ title: '', href: '' });
  const handlePopup = ({ title, href }: CardPopupProps) => {
    setShowPopup({ title, href });
  };

  if (!data) {
    return <MainLoader />;
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
            handlePopup={handlePopup}
            key={index}
            href={chat.href}
            title={chat.title}
            description={chat.description}
            color={chat.color}
          />
        ))}
      </div>
      {showPopup.title != '' && (
        <ChatPopup
          title={showPopup.title}
          href={showPopup.href}
          popupHandler={() => setShowPopup({ title: '', href: '' })}
        />
      )}
    </Page>
  );
}
