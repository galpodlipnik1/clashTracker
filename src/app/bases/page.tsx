'use client';

import Search from './components/Search';
import Select from './components/Select';
import getBases from '@/actions/getBases';
import { useState, useEffect } from 'react';
import { FullBase } from '@/types';
import BaseItem from './components/BaseItem';
import Footer from '../components/Footer';
import { isMobile } from 'react-device-detect';
import { PacmanLoader } from 'react-spinners';
import { Button } from '../components/ui/button';
import AddBaseModal from './components/AddBaseModal';

type TownHall = {
  value: string;
  name: string;
};

type Type = {
  value: string;
  name: string;
};

const Bases = () => {
  const [selectedTownHall, setSelectedTownHall] = useState<TownHall>({
    value: '',
    name: '',
  });
  const [selectedType, setSelectedType] = useState<Type>({
    value: '',
    name: '',
  });
  const [bases, setBases] = useState<FullBase[]>([]);
  const [filteredBases, setFilteredBases] = useState<FullBase[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchBases = async () => {
      setLoading(true);
      const bases = await getBases();
      setBases(bases);
      setLoading(false);
    };

    fetchBases();
  }, []);

  useEffect(() => {
    const filterBases = () => {
      let filteredBases = bases;
      if (selectedTownHall.value !== '') {
        filteredBases = filteredBases.filter(
          (base) => base.townHall === selectedTownHall.value
        );
      }
      if (selectedType.value !== '') {
        filteredBases = filteredBases.filter((base) =>
          base.type.includes(selectedType.value)
        );
      }
      setFilteredBases(filteredBases);
    };

    filterBases();
  }, [selectedTownHall, selectedType, bases]);

  const handleTownHall = (e: any) => {
    setSelectedTownHall(e.target.item);
  };

  const handleType = (e: any) => {
    setSelectedType(e.target.item);
  };

  return (
    <>
      <AddBaseModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div
        style={{
          backgroundImage: isMobile
            ? undefined
            : 'url(/images/coc_wallpaper.jpg)',
        }}
        className="bg-cover bg-center bg-no-repeat min-h-screen w-full flex flex-col justify-start items-center"
      >
        <div className="flex items-center justify-center w-full mt-24 mb-8">
          <h1 className="text-4xl text-right text-neutral-900 font-extrabold w-2/3">
            Base Designs for Clash of Clans
          </h1>
          <div className="flex items-center justify-end w-1/3 pr-5">
            <Button className="rounded-2xl" onClick={() => setIsOpen(true)}>
              {' '}
              Add Base
            </Button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between w-1/3">
          <Select
            placeholder={`${
              selectedTownHall?.name !== ''
                ? selectedTownHall.name
                : 'Select a town hall'
            }`}
            onClick={handleTownHall}
          />
          <Search
            placeholder={`${
              selectedType.name !== '' ? selectedType.name : 'Select base type'
            }`}
            onClick={handleType}
          />
        </div>
        <div className="flex flex-wrap mt-8 px-16 gap-4 w-full">
          {loading ? (
            <div className="flex items-center justify-center w-full mt-24">
              <PacmanLoader color={'#36d7b7'} />
            </div>
          ) : (
            filteredBases.map((base: FullBase) => (
              <BaseItem key={base.id} base={base} />
            ))
          )}
        </div>
        <div className="flex-grow mt-5" />
        <Footer />
      </div>
    </>
  );
};

export default Bases;
