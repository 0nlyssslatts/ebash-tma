import type { Metadata } from 'next';
import { groq } from 'next-sanity';

import Ref from './Ref';
import { client } from '@/sanity/client';

export const metadata: Metadata = {
  title: 'Реферальная система',
  description: 'Пригласи друга',
};

export const revalidate = 600;

async function getRefPageData() {
  return await client.fetch(groq`*[_type == "refPage"][0]{
    title, 
    text,
    description, 
    button,
    buttonHref,
  }`);
}

export default async function RefPage() {
  const data = await getRefPageData();
  return <Ref {...data} />;
}
