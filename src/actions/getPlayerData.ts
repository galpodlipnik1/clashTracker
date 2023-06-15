'use server';

import { composeClashInfoFromClass } from '@/lib/utils';
import { connectToApi, client } from '@/lib/apiConnect';


export async function getPlayerData(playerId: string) {
  try {
    if (!client) await connectToApi();
    const playerClass = await client.getPlayer(playerId);
    const player = composeClashInfoFromClass(playerClass);

    return player;
  } catch (error) {
    console.log(error);
  }
}
