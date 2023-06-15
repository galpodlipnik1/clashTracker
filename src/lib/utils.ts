import { Player } from 'clashofclans.js';
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function composeClashInfoFromClass(info: Player) {
  const player = {
    name: info.name,
    tag: info.tag,
    townHallLevel: info.townHallLevel,
    league: {
      name: info.league.name,
      iconUrls: {
        small: info.league.icon.small,
      },
    },
    builderHallLevel: info.builderHallLevel,
    expLevel: info.expLevel,
    trophies: info.trophies,
    bestTrophies: info.bestTrophies,
    builderTrophies: info.versusTrophies,
    bestBuilderTrophies: info.bestVersusTrophies,
    warStars: info.warStars,
    clanCapitalContributions: info.clanCapitalContributions,
    achievements: [
      ...info.achievements.map((achievement: any) => ({
        name: achievement.name,
        stars: achievement.stars,
        value: achievement.value,
        target: achievement.target,
        info: achievement.info,
        completionInfo: achievement.completionInfo,
      })),
    ],
    labels: [...info.labels.map((label: any) => label.name)],
    clan: {
      badgeUrls: {
        small: info.clan?.badge.small,
      },
      name: info.clan?.name,
      tag: info.clan?.tag,
      clanLevel: info.clan?.level,
    },
    troops: [
      ...info.troops.map((troop: any) => ({
        name: troop.name,
        level: troop.level,
        maxLevel: troop.maxLevel,
        village: troop.village,
      })),
    ],
  };

  return player;
}
