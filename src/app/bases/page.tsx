'use client'

import Search from "./components/Search"
import Select from "./components/Select"
import getBases from "@/actions/getBases"
import { useEffect, useMemo, useState } from "react"
import { Base } from "@prisma/client"
import prisma from "@/lib/prismadb"
type TownHall = {
  value: string
  name: string
}

type Type = {
  value: string
  name: string
}
 
const Bases = () => {
  const [selectedTownHall, setSelectedTownHall] = useState<TownHall>({ value: '',name: '' })
  const [selectedType, setSelectedType] = useState<Type>({ value: '',name: '' })
  const [bases, setBases] = useState<Base[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useMemo(async() => {
    setLoading(true)
    const bases = await getBases()
    setBases(bases)
    setLoading(false)
  }, [])

  const handleTownHall = (e: any) => {
    setSelectedTownHall(e.target.item)
  }

  const handleType = (e: any) => {
    setSelectedType(e.target.item)
  }

  return (
    <div style={{ backgroundImage: 'url(/images/coc_wallpaper.jpg)' }} className="bg-cover bg-center bg-no-repeat h-screen w-screen flex flex-col justify-start items-center">
      <h1 className="text-3xl text-white font-bold mt-24">Base designs for Clash of Clans</h1>
      <div className="flex flex-row items-center justify-between w-1/3">
        <Select placeholder={`${selectedTownHall?.name != '' ? selectedTownHall.name : 'Select a town hall'}`} onClick={handleTownHall} />
        <Search placeholder={`${selectedType.name != '' ? selectedType.name : 'Select type of base'}`} onClick={handleType} />
      </div>
      <div className="flex flex-wrap items-center justify-between w-full">

      </div>
    </div>
  )
}

export default Bases