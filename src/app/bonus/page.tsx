import type { Metadata } from 'next';

import Bonus from './Bonus';

export const metadata: Metadata = {
  title: 'Ништяки',
  description: 'Ништяки и материалы',
};

export default async function BonusPage() {
  return <Bonus />;
}
