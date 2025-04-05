'use client';

import { useState } from 'react';

import { ChatCard } from '@/components/Cards/ChatCard';
import { ChatPopup } from '@/components/Cards/ChatPopup';
import { Page } from '@/components/Page';
import { DarkSection } from '@/components/ui/DarkSection';
import { MainLoader } from '@/components/ui/MainLoader';
import { Header } from '@/components/ui/Texts/Header';
import { Text } from '@/components/ui/Texts/Text';

import { ChatsPageData } from '@/lib/types/chats';

interface CardPopupProps {
  title: string;
  href: string;
  isOpen: boolean;
}

export default function Chats(data: ChatsPageData) {
  const [showPopup, setShowPopup] = useState<CardPopupProps>({ title: '', href: '', isOpen: false });
  const handlePopup = ({ title, href }: CardPopupProps) => {
    setShowPopup({ title, href, isOpen: true });
  };

  if (!data) {
    return <MainLoader />;
  }

  return (
    <Page>
      <Header>{data.header}</Header>
      <DarkSection>
        <TextLight className="text-center">Для вступления тыкни на карточку</TextLight>
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
          id={showPopup.title}
          popupHandler={() => setShowPopup({ title: '', href: '', isOpen: false })}
          isOpen={showPopup.isOpen}
        />
      )}
    </Page>
  );
}
