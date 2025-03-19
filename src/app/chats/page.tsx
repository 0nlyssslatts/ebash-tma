import type { Metadata } from 'next';

import Chats from './Chats';

export const metadata: Metadata = {
    title: 'Чаты',
    description: 'Страница с чатами',
};

export default async function HomePage() {
    return <Chats />;
}
