import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';
import { clanInfo, clanMembers } from '@/data/clanInfo';
interface ClanDataProps {
  clan: any
}

const ClanData:React.FC<ClanDataProps> = ({ clan }) => {
  if (!clan) return null;
  const clanData = clanInfo(clan);
  const clanMembersData = clanMembers(clan);
  return (
    <div>
      <div className="flex flex-col justify-start items-center w-full mt-10">
        <div className="flex flex-col justify-center items-center w-full lg:w-2/3 bg-white p-3 rounded-t-lg">
          <div className='flex flex-row justify-center items-center w-full lg:w-2/3 bg-white p-3 rounded-t-lg'>
            <Image
              src={clan.badgeUrls.small}
              alt="clan badge"
              width={100}
              height={100}
              style={{
                backgroundColor: 'transparent',
                width: 'auto',
                height: 'auto',
              }}
            />
            <div className="flex flex-col justify-start items-start ml-4">
              <span className="text-3xl font-extrabold">{clan.name}</span>
              <span className="text-lg text-gray-600">{clan.tag}</span>
            </div>
          </div>
          <div className="ml-4">
            <span className="text-base font-extrabold">{clan.description}</span>
          </div>
        </div>
        <div className="w-full lg:w-2/3 bg-white p-3 rounded-b-lg">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-extrabold">
                <span>Clan Information</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-neutral-900 font-extrabold">
                  {clanData.slice(1, clanData.length).map((data) => (
                    <div
                      className="flex flex-row justify-between items-center w-full hover:bg-gray-100 p-2 rounded-lg cursor-default"
                      key={data.name}
                    >
                      <span className="text-lg">{data.name}</span>
                      <span className="text-lg">{data.value}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-extrabold">
                <span>Clan Members</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-neutral-900 font-extrabold">
                  {clanMembersData.map((member: any) => (
                    <div
                      className="flex flex-row justify-between items-center w-full hover:bg-gray-100 p-2 rounded-lg cursor-default"
                      key={member.name}
                    >
                      <div className="flex flex-row justify-start items-center">
                        <Image
                          src={member.leagueIcon}
                          alt="player league"
                          width={30}
                          height={30}
                          style={{ width: 'auto', height: 'auto' }}
                        />
                        <span className="text-lg ml-2">{member.name} <span className='text-gray-400 text-xs font-bold'>({member.tag})</span></span>
                      </div>
                      <span className="text-lg"> {member.trophies} | {member.role}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default ClanData