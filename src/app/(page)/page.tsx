'use client';

import Image from 'next/image';
import { FaGooglePlay } from 'react-icons/fa';
import { GrAppleAppStore } from 'react-icons/gr';

const LandingPage = () => {
  const handleGooglePlayClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.supercell.clashofclans&hl=en_US&gl=US', '_blank');
  };

  const handleAppleStoreClick = () => {
    window.open('https://apps.apple.com/us/app/clash-of-clans/id529479190', '_blank');
  };

  return (
    <div style={{ backgroundImage: 'url(/images/coc_wallpaper.jpg)' }} className="bg-cover bg-center bg-no-repeat h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl text-center lg:text-5xl font-bold mt-10 lg:mt-4 mb-8 text-gray-100 bg-neutral-900 p-4 rounded-full">
        Do you have Clash of Clans installed?
      </h1>
      <div className="w-full flex justify-around items-center lg:flex-row flex-col">
        <div className="mx-auto mb-6">
          <Image
            className='rounded-full'
            src="/images/coc_img.png"
            alt="Clash of Clans"
            width={200}
            height={250}
          />
        </div>
        <div className="mx-auto">
          <Image
            src="/images/coc_logo.png"
            alt="Clash of Clans"
            width={300}
            height={250}
          />
        </div>
      </div>
      <div className="flex space-y-5 lg:space-x-5 lg:space-y-0 mt-8 flex-col lg:flex-row">
        <button
          className="bg-red-500 hover:bg-red-600 text-white p-4 rounded flex items-center"
          onClick={handleGooglePlayClick}
        >
          <FaGooglePlay className="mr-2" size={24} />
          Google Play Store
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded flex items-center"
          onClick={handleAppleStoreClick}
        >
          <GrAppleAppStore className="mr-2" size={24} />
          Apple App Store
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
