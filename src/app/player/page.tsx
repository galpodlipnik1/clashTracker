'use client'

import Search from "@/app/components/Search";
import axios from "axios";
import { isMobile } from "react-device-detect";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "../components/ui/button";
import { getPlayerData } from "@/actions/getPlayerData";
import { toast } from "react-hot-toast";

const Player = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [playerData, setPlayerData] = useState(null);
  const { register, handleSubmit, watch, formState: { errors }, } = useForm<FieldValues>({
    defaultValues: {
      tag: '',
    },
  });

  const tag = watch('tag');

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    const res = await getPlayerData(encodeURIComponent(data.tag));
    if(res?.status === 404) {
      setIsLoading(false);
      toast.error('Player not found');
    }
    setPlayerData(res);
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
      <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-28 flex justify-center items-center">
        <Search id="tag" placeholder="#123456" value={tag} register={register} errors={errors} disabled={isLoading} />
        <Button type="submit" disabled={isLoading} className="ml-2 p-6">
          <AiOutlineSearch className="text-2xl" />
        </Button>
      </form>
    </div>
  )
};

export default Player;
