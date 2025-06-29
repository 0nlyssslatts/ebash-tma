'use client';

import { Page } from '@/components/Page';
import { SmallButton } from '@/components/ui/Buttons/SmallButton';
import { DarkSection } from '@/components/ui/DarkSection';
import CustomPortableText from '@/components/ui/Texts/CustomPortableText';
import { Header } from '@/components/ui/Texts/Header';
import { Text } from '@/components/ui/Texts/Text';

import { RefPageProps } from '@/lib/types/ref';

export default function Ref({ title, text, description, button, buttonHref }: RefPageProps) {
  return (
    <Page>
      <Header>{title}</Header>
      <DarkSection>
        <Text>{text}</Text>
        <CustomPortableText content={description}></CustomPortableText>
        <SmallButton
          onClick={() => (window.location.href = buttonHref)}
          className="mt-6 bg-backgroundgreen hover:bg-backgroundgreen/15"
        >
          {button}
        </SmallButton>
      </DarkSection>
    </Page>
  );
}
