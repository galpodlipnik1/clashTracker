'use server';

import { composeClashInfoFromClass } from '@/lib/utils';
import { Client } from 'clashofclans.js';
let client: Client;

export const connectToApi = async () => {
  try {
    const email = process.env?.COC_EMAIL;
    const password = process.env?.COC_PASSWORD;
    if (!email || !password) {
      throw new Error('Clash of Clans credentials not found');
    }
    if (!client) client = new Client();
    await client.login({ email, password });
    console.log('Logged in');
  } catch (error) {
    console.log(error);
  }
};

export async function getPlayerData(playerId: string) {
  try {
    if (!client) await connectToApi();
    const playerClass = await client.getPlayer(playerId);
    const player = composeClashInfoFromClass(playerClass);
    console.log(player);

    return player;
  } catch (error) {
    console.log(error);
  }
}
