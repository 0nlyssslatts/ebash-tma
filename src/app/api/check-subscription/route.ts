import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { userId } = await req.json();

  const BOT_TOKEN = process.env.BOT_TOKEN;
  const channelIds = process.env.CHANNEL_IDS?.split(',') || [];

  try {
    const results = await Promise.all(
      channelIds.map(async (channelId) => {
        const response = await fetch(
          `https://api.telegram.org/bot${BOT_TOKEN}/getChatMember?user_id=${userId}&chat_id=${channelId}`
        );
        const data = await response.json();
        return ['member', 'administrator', 'creator'].includes(data.result?.status);
      })
    );

    return NextResponse.json({ isSubscribed: results.some(Boolean) });
  } catch (error) {
    console.error('Subscription check failed:', error);
    return NextResponse.json({ error: 'Subscription check failed' }, { status: 500 });
  }
}