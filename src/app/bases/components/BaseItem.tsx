import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { FullBase } from '@/types';
import Image from 'next/image';
import { BiLike } from 'react-icons/bi';

interface BaseItemProps {
  base: FullBase;
}

const BaseItem: React.FC<BaseItemProps> = ({ base }) => {
  return (
    <Card className="bg-neutral-900 border-0 w-full max-w-xs shadow-xl flex flex-col">
      <CardHeader className="p-0 relative flex">
        <Image
          src={base.image || '/images/coc_wallpaper.jpg'}
          alt={base.name}
          className="w-full h-40 object-cover rounded-t-lg"
          width={600}
          height={1}
        />
        <div className="absolute z-40 top-0 right-0 m-2">
          <div className="flex justify-center items-center bg-neutral-900 rounded-full w-8 h-8 cursor-pointer hover:bg-neutral-600">
            <BiLike className="text-gray-300" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-1 flex justify-start items-center flex-col flex-grow">
        <div>
          <CardTitle className="text-xl font-bold text-gray-400">
            {base.name}
          </CardTitle>
        </div>
        <CardDescription className="text-sm text-gray-400">
          {base.description}
        </CardDescription>
      </CardContent>
      <div className="flex-grow"></div>
      <CardFooter className="flex flex-col w-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col items-start">
            <div>
              <CardDescription className="text-sm text-gray-400">
                Likes: <span className="font-bold">{base.likes}</span>
              </CardDescription>
            </div>
            <div>
              <CardDescription className="text-sm text-gray-400">
                Downloads: <span className="font-bold">{base.downloads}</span>
              </CardDescription>
            </div>
          </div>
          <div>
            <Button
              variant="default"
              className="bg-neutral-700 text-white font-bold hover:bg-gray-400 hover:text-black"
              onClick={() => window.open(base.baseUrl, '_blank')}
            >
              Use Base
            </Button>
          </div>
        </div>
        <hr className="my-3 border-t border-gray-600 w-full" />
        <div className="flex justify-between w-full">
          <CardDescription className="text-sm text-gray-400">
            {base.user === null ? 'anonymous' : base.user.name}
          </CardDescription>
          <CardDescription className="text-sm text-gray-400">
            {base.createdAt.toLocaleDateString('sl-SI')}
          </CardDescription>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BaseItem;
