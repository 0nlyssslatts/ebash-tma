'use client';

import { motion } from 'framer-motion';
import { groq } from 'next-sanity';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Page } from '@/components/Page';
import { Button } from '@/components/ui/Buttons/Button';
import { DarkSection } from '@/components/ui/DarkSection';
import { Header } from '@/components/ui/Texts/Header';
import { Text } from '@/components/ui/Texts/Text';
import { TextLight } from '@/components/ui/Texts/TextLight';

import { client } from '@/sanity/client';

interface HomePageData {
  header: string;
  greeting: string;
  description: string;
  buttons: {
    text: string;
    href: string;
  }[];
}

export default function Home() {
  const [data, setData] = useState<HomePageData | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      try {
        tg.requestFullscreen();
      } catch (error) {
        console.log(error);
        tg.expand();
      }
    }

    const loadData = async () => {
      try {
        const result = await client.fetch(groq`*[_type == "homePage"][0]{
          header, greeting, description,
          "buttons": buttons[] { text, href }
        }`);
        setData(result);
      } catch (error) {
        console.error('Sanity error:', error);
      }
    };

    loadData();
  }, []);

  if (!data) {
    return (
      <Page>
        <div className="flex justify-center items-center h-screen">
          <p>Загрузка...</p>
        </div>
      </Page>
    );
  }

  return (
    <Page>
      <Header>{data.header}</Header>
      <DarkSection>
        <Text>{data.greeting}</Text>
        <TextLight>{data.description}</TextLight>
        <div className="flex flex-col gap-2 mt-4">
          {data.buttons.map((button, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={button.href}>
                <Button>{button.text}</Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </DarkSection>
    </Page>
  );
}
