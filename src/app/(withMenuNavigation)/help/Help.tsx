'use client';

import { Page } from '@/components/Page';
import { SmallButton } from '@/components/ui/Buttons/SmallButton';
import { DarkSection } from '@/components/ui/DarkSection';
import { Header } from '@/components/ui/Texts/Header';
import { Text } from '@/components/ui/Texts/Text';
import { TextLight } from '@/components/ui/Texts/TextLight';

interface HelpPageProps {
  title: string;
  text: string;
  description: string;
  button: string;
  buttonHref: string;
}

export default function Help({ title, text, description, button, buttonHref }: HelpPageProps) {
  return (
    <Page>
      <Header>{title}</Header>
      <DarkSection>
        <Text>{text}</Text>
        <TextLight>{description}</TextLight>
        <a href={buttonHref}>
          <SmallButton className="mt-6">{button}</SmallButton>
        </a>
      </DarkSection>
    </Page>
  );
}
