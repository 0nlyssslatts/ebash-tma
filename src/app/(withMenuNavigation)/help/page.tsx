import type { Metadata } from 'next';
import { groq } from 'next-sanity';

import Help from './Help';
import { client } from '@/sanity/client';

export const metadata: Metadata = {
  title: 'Помощь',
  description: 'Написать куратору',
};

export const revalidate = 600;

async function getHelpPageData() {
  return await client.fetch(groq`*[_type == "helpPage"][0]{
    title, 
    text,
    description, 
    button,
    buttonHref,
  }`);
}

export default async function HelpPage() {
  const data = await getHelpPageData();
  return <Help {...data} />;
}
