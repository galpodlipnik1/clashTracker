import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/app/components/ui/hover-card';
import { basicInfo, clanInfo } from '@/data/playerInfo';
import Image from 'next/image';

interface playerDataProps {
  player: any;
}
const PlayerData: React.FC<playerDataProps> = ({ player }) => {
  if (!player) return null;
  const basicInfoData = basicInfo(player);
  const clanData = clanInfo(player);
  return (
    <div>
      <div className="flex flex-col justify-start items-center w-full mt-10">
        <div className="flex flex-row justify-center items-center w-2/3 bg-white p-3 rounded-t-lg">
          <Image
            src={`/images/townHalls/th${player.townHallLevel}.png`}
            alt="player league"
            width={100}
            height={100}
            style={{
              backgroundColor: 'transparent',
              width: 'auto',
              height: 'auto',
            }}
            unoptimized
          />
          <div className="flex flex-col justify-start items-start ml-4">
            <span className="text-3xl font-extrabold">{player.name}</span>
            <span className="text-lg text-gray-600">{player.tag}</span>
          </div>
        </div>
        <div className="w-full lg:w-2/3 bg-white p-3 rounded-b-lg">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-extrabold">
                <span>Basic Information</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-neutral-900 font-extrabold">
                  <div
                    className="flex flex-col justify-center items-center w-full m-2"
                    key={basicInfoData[0].name}
                  >
                    <Image
                      src={basicInfoData[0].value}
                      alt="player league"
                      width={50}
                      height={50}
                      style={{ width: 'auto', height: 'auto' }}
                      className=""
                    />
                    <span>{basicInfoData[0].title}</span>
                  </div>
                  {basicInfoData.slice(1, basicInfoData.length).map((item) => (
                    <div
                      className="flex flex-row justify-between items-center w-full hover:bg-gray-100 p-2 rounded-lg cursor-default"
                      key={item.name}
                    >
                      <span>{item.name}</span>
                      <span>{item.value}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-extrabold">
                <span>Clan Information</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-neutral-900 font-extrabold">
                  <div
                    className="flex flex-row justify-center items-center w-full m-2"
                    key={clanData[0].name}
                  >
                    <Image
                      src={clanData[0].value}
                      alt="player league"
                      width={50}
                      height={50}
                      style={{ width: 'auto', height: 'auto' }}
                      className=""
                    />
                  </div>
                  {clanData.slice(1, clanData.length).map((item) => (
                    <div
                      className="flex flex-row justify-between items-center w-full hover:bg-gray-100 p-2 rounded-lg cursor-default"
                      key={item.name}
                    >
                      <span>{item.name}</span>
                      <span>{item.value}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-extrabold">
                <span>Troops Levels</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-neutral-900 font-extrabold">
                  {player.troops
                    .filter(
                      (troop: any) => troop.name.includes('Super') === false
                    )
                    .map((troop: any) => (
                      <div
                        className="flex flex-row justify-between items-center w-full hover:bg-gray-100 p-2 rounded-lg cursor-default"
                        key={troop.name}
                      >
                        <span>{troop.name}</span>
                        <span>
                          <span
                            className={
                              troop.level !== troop.maxLevel
                                ? 'text-gray-400'
                                : ''
                            }
                          >
                            {troop.level}
                          </span>{' '}
                          / {troop.maxLevel}
                        </span>
                      </div>
                    ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-extrabold">
                <span>Achievements</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-neutral-900 font-extrabold">
                  {player.achievements.map((achievement: any) => (
                    <HoverCard key={achievement.name}>
                      <HoverCardTrigger className="flex flex-row justify-between items-center w-full hover:bg-gray-100 p-2 rounded-lg cursor-default">
                        <span>
                          {achievement.name} | {achievement.value} /{' '}
                          <span
                            className={
                              achievement.value < achievement.target
                                ? 'text-gray-400'
                                : ''
                            }
                          >
                            {achievement.target}
                          </span>
                        </span>
                        <span>
                          <span
                            className={
                              achievement.stars !== 3 ? 'text-gray-400' : ''
                            }
                          >
                            {achievement.stars}
                          </span>{' '}
                          / 3
                        </span>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="flex flex-col justify-start items-start w-full">
                          <span className="text-xl font-extrabold">
                            {achievement.name}
                          </span>
                          <span className="text-lg font-bold">
                            {achievement.value} / {achievement.target}
                          </span>
                          <hr className="w-full border-gray-300 my-2" />
                          <span className="text-md">{achievement.info}</span>
                          <hr className="w-full border-gray-300 my-2" />
                          <span className="text-md">
                            {achievement.completionInfo}
                          </span>
                          <span className="text-sm text-gray-500 mt-3">
                            {achievement.village}
                          </span>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default PlayerData;
