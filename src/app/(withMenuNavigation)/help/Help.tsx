'use client';

import { useRouter } from 'next/navigation';

import { Page } from '@/components/Page';
import { SmallButton } from '@/components/ui/Buttons/SmallButton';
import { DarkSection } from '@/components/ui/DarkSection';
import { Header } from '@/components/ui/Texts/Header';
import { Text } from '@/components/ui/Texts/Text';
import { TextLight } from '@/components/ui/Texts/TextLight';

import { HelpPageProps } from '@/lib/types/help';

export default function Help({ title, text, description, button, buttonHref }: HelpPageProps) {
  const router = useRouter();

  return (
    <Page>
      <Header>{title}</Header>
      <DarkSection>
        <Text>{text}</Text>
        <TextLight>{description}</TextLight>
        <SmallButton onClick={() => router.push(buttonHref)} className="mt-6">
          {button}
        </SmallButton>
      </DarkSection>
    </Page>
  );
}
