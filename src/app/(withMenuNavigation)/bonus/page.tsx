import type { Metadata } from 'next';
import { groq } from 'next-sanity';

import Bonus from './Bonus';
import { client } from '@/sanity/client';

export const metadata: Metadata = {
  title: 'Ништяки',
  description: 'Ништяки и материалы',
};

export const revalidate = 43200;

async function getBonusPageData() {
  return await client.fetch(groq`*[_type == "bonusPage"][0]{
    header, 
    "bonuses": bonuses[] { title, description, buttonDescription, buttonText, buttonHref }
  }`);
}

export default async function BonusPage() {
  const data = await getBonusPageData();
  return <Bonus {...data} />;
}
