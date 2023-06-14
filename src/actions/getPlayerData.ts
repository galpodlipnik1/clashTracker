'use server';

import { Client } from 'clashofclans.js';

const client = new Client();

export async function getPlayerData(playerId: string) {
  try {
    const email = process.env?.COC_EMAIL;
    const password = process.env?.COC_PASSWORD;
    if (!email || !password) {
      throw new Error('Clash of Clans credentials not found');
    }

    client.login({ email, password });
    console.log(playerId);
    
    const player = await client.getPlayer(playerId);
    console.log(player);
    
    return player;
  } catch (error: any) {
    console.log(error);
    return { status: error.response?.status };
  }
}

