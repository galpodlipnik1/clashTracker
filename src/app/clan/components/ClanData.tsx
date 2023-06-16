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
interface ClanDataProps {
  clan: any
}

const ClanData:React.FC<ClanDataProps> = ({ clan }) => {
  return (
    <div>
      <div className="flex flex-col justify-start items-center w-full mt-10">
        clan info here
      </div>
    </div>
  )
}

export default ClanData