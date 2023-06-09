'use client';

import Image from 'next/image';
import Footer from '../components/Footer';
import { FaGooglePlay } from 'react-icons/fa';
import { GrAppleAppStore } from 'react-icons/gr';
import { isMobile } from 'react-device-detect';

const LandingPage = () => {
  const handleGooglePlayClick = () => {
    window.open(
      'https://play.google.com/store/apps/details?id=com.supercell.clashofclans&hl=en_US&gl=US',
      '_blank'
    );
  };

  const handleAppleStoreClick = () => {
    window.open(
      'https://apps.apple.com/us/app/clash-of-clans/id529479190',
      '_blank'
    );
  };

  return (
    <div
      style={{
        backgroundImage: isMobile
          ? undefined
          : 'url(/images/coc_wallpaper.jpg)',
      }}
      className="bg-cover bg-center bg-no-repeat min-h-full w-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-2xl text-center lg:text-5xl font-extrabold italic mt-32 lg:mt-22 mb-8 text-neutral-950">
        Do you have Clash of Clans installed?
      </h1>
      <div className="w-full flex justify-around items-center lg:flex-row flex-col">
        <div className="mx-auto mb-6">
          <Image
            className="rounded-full"
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
      <div className="flex-grow" />
      <div className="h-full flex lg:items-end space-y-5 lg:space-x-5 lg:space-y-0 mt-8 lg:mb-12 flex-col lg:flex-row">
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
      <div className="flex-grow mt-3" />
      <Footer />
    </div>
  );
};

export default LandingPage;
