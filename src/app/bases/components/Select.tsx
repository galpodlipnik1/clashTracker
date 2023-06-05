import townHall from "@/data/townHall"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu"
import { Button } from "@/app/components/ui/button"

interface SelectProps {
  placeholder: string
  onClick: (e: any) => void
}

type TownHall = {
  value: string
  name: string
  img?: string
}

const Select:React.FC<SelectProps> = ({ placeholder, onClick }) => {
  const handleClick = (e:any, item:TownHall) => {
    e.target.item = {
      value: item.value,
      name: item.name,
    }
    onClick(e)
  }
  return (
    <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default" className="mt-4 p-6">{placeholder}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel className="cursor-pointer" onClick={(e) => handleClick(e, { value: '', name: '' })}>Town halls(click to deselect)</DropdownMenuLabel>
            <DropdownMenuSeparator />
            
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <div className="flex flex-row items-center">
                  <img src="/images/townHalls/th1.png" alt="Town Hall 1" className="w-8 h-8" />
                  <p className="ml-2 font-bold">Town halls 1-3</p>
                </div>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent sideOffset={5}>
                {townHall.slice(0,3).map((item, index) => (
                  <DropdownMenuItem key={index} onClick={(e) => handleClick(e, item)}>
                    <div className="flex flex-row items-center p-2">
                      <img src={item.img} alt={item.name} className="w-8 h-8" />
                      <p className="ml-2 font-bold">{item.name}</p>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <div className="flex flex-row items-center">
                  <img src="/images/townHalls/th1.png" alt="Town Hall 1" className="w-8 h-8" />
                  <p className="ml-2 font-bold">Town halls 4-6</p>
                </div>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent sideOffset={5}>
                {townHall.slice(3,6).map((item, index) => (
                  <DropdownMenuItem key={index} onClick={(e) => handleClick(e, item)}>
                    <div className="flex flex-row items-center p-2">
                      <img src={item.img} alt={item.name} className="w-8 h-8" />
                      <p className="ml-2 font-bold">{item.name}</p>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <div className="flex flex-row items-center">
                  <img src="/images/townHalls/th1.png" alt="Town Hall 1" className="w-8 h-8" />
                  <p className="ml-2 font-bold">Town halls 7-9</p>
                </div>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent sideOffset={5}>
                {townHall.slice(6,9).map((item, index) => (
                  <DropdownMenuItem key={index} onClick={(e) => handleClick(e, item)}>
                    <div className="flex flex-row items-center p-2">
                      <img src={item.img} alt={item.name} className="w-8 h-8" />
                      <p className="ml-2 font-bold">{item.name}</p>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <div className="flex flex-row items-center">
                  <img src="/images/townHalls/th1.png" alt="Town Hall 1" className="w-8 h-8" />
                  <p className="ml-2 font-bold">Town halls 10-12</p>
                </div>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent sideOffset={5}>
                {townHall.slice(9,12).map((item, index) => (
                  <DropdownMenuItem key={index} onClick={(e) => handleClick(e, item)}>
                    <div className="flex flex-row items-center p-2">
                      <img src={item.img} alt={item.name} className="w-8 h-8" />
                      <p className="ml-2 font-bold">{item.name}</p>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <div className="flex flex-row items-center">
                  <img src="/images/townHalls/th1.png" alt="Town Hall 1" className="w-8 h-8" />
                  <p className="ml-2 font-bold">Town halls 13-15</p>
                </div>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent sideOffset={5}>
                {townHall.slice(12,15).map((item, index) => (
                  <DropdownMenuItem key={index} onClick={(e) => handleClick(e, item)}>
                    <div className="flex flex-row items-center p-2">
                      <img src={item.img} alt={item.name} className="w-8 h-8" />
                      <p className="ml-2 font-bold">{item.name}</p>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
  )
}

export default Select