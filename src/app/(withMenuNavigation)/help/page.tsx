import type { Metadata } from 'next';

import Help from './Help';

export const metadata: Metadata = {
  title: 'Помощь',
  description: 'Написать куратору',
};

export default async function HelpPage() {
  return <Help />;
}
