import type { Metadata } from 'next';
import { groq } from 'next-sanity';

import Home from './Home';
import { client } from '@/sanity/client';

export const metadata: Metadata = {
  title: 'Главная',
  description: 'Главная страница',
};

export const revalidate = 600;

async function getHomePageData() {
  return await client.fetch(groq`*[_type == "homePage"][0]{
    header, greeting, description,
    "buttons": buttons[] { text, href }
  }`);
}

export default async function HomePage() {
  const data = await getHomePageData();
  return <Home data={data} />;
}
