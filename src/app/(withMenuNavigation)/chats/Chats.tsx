'use client';

import { motion } from 'framer-motion';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { ChatCard } from '@/components/Cards/ChatCard';
import { ChatPopup } from '@/components/Cards/ChatPopup';
import { Page } from '@/components/Page';
import { Input } from '@/components/ui/Input';
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
  const [chats, setChats] = useState(data?.chats);
  const timerRef = useRef<number | null>(null);
  const handlePopup = ({ title, href }: CardPopupProps) => {
    setShowPopup({ title, href, isOpen: true });
  };

  const filterChats = (searchedText: string) => {
    const filteredChats = data?.chats.filter((chat) => {
      return chat.keywords.some((key: string) => {
        return key.toLowerCase().includes(searchedText.toLowerCase());
      });
      // chat.title.toLowerCase().includes(searchedText.toLowerCase()) ||
      // chat.description.toLowerCase().includes(searchedText.toLowerCase())
    });

    setChats(filteredChats);
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      filterChats(value);
    }, 400);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  if (!data) {
    return <MainLoader />;
  }

  return (
    <Page>
      <Header>{data.header}</Header>
      <Input placeholder="Найти чат" onChange={handleSearch} />
      <Text className="self-start my-5">Чаты</Text>

      {chats.length !== 0 ? (
        <motion.div
          key={chats.length}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 gap-3">
            {chats.map((chat, index) => (
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
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Text className="mt-5">Такого чата нет :(</Text>
        </motion.div>
      )}

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
