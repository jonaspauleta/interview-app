import React from "react"
import Slots from '../slots'

interface TableRowProps {
    slots: Slots[]
    setSlots: React.Dispatch<React.SetStateAction<Slots[]>>
    time: number
    day: number
}

export default function TableRow ({ slots, setSlots, time, day }: TableRowProps) {
    const handleClick = () => {
        setSlots(current =>
            current.map(obj => {
              if (obj.day === day && obj.time == time) {
                return {...obj, active: !obj.active};
              }
      
              return obj;
            }),
          );
    }

    const isActive = () => {
        return slots.find((slot) => {
            return slot.day == day && slot.time == time
        })?.active
    }

    return  (
        <td className={'border ' + (isActive() ? 'bg-[#3d3f6e]' : '')} onClick={handleClick} />
    )
}