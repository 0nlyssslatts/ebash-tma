import type { Metadata } from 'next';

import Moves from './Moves';

export const metadata: Metadata = {
  title: 'Регулярные активности',
  description: 'Расписание активностей',
};

export default async function MovesPage() {
  return <Moves />;
}
