'use client';

import { useState } from 'react';

import { ChatCard } from '@/components/Cards/ChatCard';
import { ChatPopup } from '@/components/Cards/ChatPopup';
import { Page } from '@/components/Page';
import { DarkSection } from '@/components/ui/DarkSection';
import { MainLoader } from '@/components/ui/MainLoader';
import { Header } from '@/components/ui/Texts/Header';
import { Text } from '@/components/ui/Texts/Text';
import { TextLight } from '@/components/ui/Texts/TextLight';

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

interface CardPopupProps {
  title: string;
  descriptionLong: string;
  href: string;
}

export default function Chats(data: ChatsPageData) {
  const [showPopup, setShowPopup] = useState<CardPopupProps>({ title: '', descriptionLong: '', href: '' });
  const handlePopup = ({ title, descriptionLong, href }: CardPopupProps) => {
    setShowPopup({ title, descriptionLong, href });
  };

  if (!data) {
    return <MainLoader />;
  }

  return (
    <Page>
      <Header>{data.header}</Header>
      <DarkSection>
        <TextLight>Для вступления тыкни на карточку</TextLight>
      </DarkSection>
      <Text className="self-start my-5">Чаты</Text>
      <div className="grid grid-cols-2 gap-3">
        {data.chats.map((chat, index) => (
          <ChatCard
            handlePopup={handlePopup}
            key={index}
            href={chat.href}
            title={chat.title}
            descriptionShort={chat.descriptionShort}
            color={chat.color}
            descriptionLong={chat.descriptionLong}
          />
        ))}
      </div>
      {showPopup.title != '' && (
        <ChatPopup
          title={showPopup.title}
          descriptionLong={showPopup.descriptionLong}
          href={showPopup.href}
          popupHandler={() => setShowPopup({ title: '', descriptionLong: '', href: '' })}
        />
      )}
    </Page>
  );
}
