'use server';

import axios from 'axios';

export async function getPlayerData(playerId: string) {
  try {
    const endpoint = `https://api.clashofclans.com/v1/players/${playerId}`;
    const headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_COC_API_TOKEN}`,
    };

    const response = await axios.get(endpoint, { headers });
    const data = response.data;

    return data;
  } catch (error: any) {
    return { status: error.response.status };
  }
}
