'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Page } from '@/components/Page';
import { Button } from '@/components/ui/Buttons/Button';
import { DarkSection } from '@/components/ui/DarkSection';
import { MainLoader } from '@/components/ui/MainLoader';
import { Header } from '@/components/ui/Texts/Header';
import { Text } from '@/components/ui/Texts/Text';
import { TextLight } from '@/components/ui/Texts/TextLight';

import { HomePageData } from '@/lib/types/home';

export default function Home({ data }: { data: HomePageData }) {
  if (!data) {
    return <MainLoader />;
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
