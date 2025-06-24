import type { Metadata } from 'next';
import { groq } from 'next-sanity';

import Chats from './Chats';
import { client } from '@/sanity/client';

export const metadata: Metadata = {
  title: 'Чаты',
  description: 'Страница с чатами',
};

export const revalidate = 600;

async function getChatsPageData() {
  return await client.fetch(groq`*[_type == "chatsPage"][0]{
    header, 
    "chats": chats[] { title, description, keywords, color, href }
  }`);
}

export default async function ChatsPage() {
  const data = await getChatsPageData();
  return <Chats {...data} />;
}
