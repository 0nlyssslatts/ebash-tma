'use client';

import { ChatCard } from '@/components/ChatCard';
import { DarkSection } from '@/components/ui/DarkSection';
import { Header } from '@/components/ui/Header';
import { Page } from '@/components/ui/Page';
import { Text } from '@/components/ui/Text';

export default function Chats() {
  const chats = [
    { id: 1, title: '9LIST', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.', href: '#' },
    { id: 2, title: '9LIST', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.', href: '#' },
    { id: 3, title: '9LIST', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.', href: '#' },
    { id: 4, title: '9LIST', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.', href: '#' },
    { id: 5, title: '9LIST', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.', href: '#' },
    { id: 6, title: '9LIST', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.', href: '#' },
  ];

  return (
    <Page>
      <Header>CHATS</Header>
      <DarkSection>
        <Text>Для вступления тыкни на карточку</Text>
      </DarkSection>
      <Text className="self-start my-5">Чаты</Text>
      <div className="grid grid-cols-2 gap-5">
        {chats.map((chat, index) => (
          <ChatCard key={chat.id} href={chat.href} title={chat.title} text={chat.text} index={index} />
        ))}
      </div>
    </Page>
  );
}
