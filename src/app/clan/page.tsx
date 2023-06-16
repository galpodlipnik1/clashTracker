'use client'

import { isMobile } from 'react-device-detect';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { PacmanLoader } from 'react-spinners';
import { getClanData } from '@/actions/getClanData';
import Search from '../components/Search';
import { AiOutlineSearch } from 'react-icons/ai';
import { Button } from '../components/ui/button';
import ClanData from './components/ClanData';

const Clan = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [clanData, setClanData] = useState<any>(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      tag: '',
    },
  });

  const tag = watch('tag');

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    const res = await getClanData(data.tag);
    console.log(res);
    
    setClanData(res);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };


  return (
    <div
      style={{
        backgroundImage: isMobile
          ? undefined
          : 'url(/images/coc_wallpaper.jpg)',
      }}
      className="bg-cover bg-center bg-no-repeat min-h-screen w-full flex flex-col justify-start items-center"
    >
      <h1 className="text-4xl font-bold mt-28">Look up a clan</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mt-10 flex justify-center items-center"
      >
        <Search
          id="tag"
          placeholder="#12345678"
          value={tag}
          register={register}
          errors={errors}
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading} className="ml-2 p-6">
          <AiOutlineSearch className='text-2xl' />
        </Button>
      </form>
      {isLoading && clanData ? (
        <div className="flex justify-center items-center mt-10">
          <PacmanLoader color="#fff" />
        </div>
      ) : (
        <div className='w-full'>
          <ClanData clan={clanData} />
        </div>
      )}
    </div>
  )
}

export default Clan