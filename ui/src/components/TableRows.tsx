import React from "react"
import TableRow from "./TableRow"
import Slots from '../slots'
import { times, days } from '../settings'

interface TableRowsProps {
    slots: Slots[]
    setSlots: React.Dispatch<React.SetStateAction<Slots[]>>
}

export default function TableRows ({ slots, setSlots }: TableRowsProps) {
    return (
        <>
            {times.map((time) => (
                    <tr key={time} className="bg-white border-b">
                        <th scope="row" className="max-w-fit py-4 px-6 border font-medium text-center text-gray-900 whitespace-nowrap">
                            {time}:00 - {time}:59
                        </th>

                        {
                            days.map((day) => (
                                <TableRow key={day} slots={slots} setSlots={setSlots} time={time} day={day} />
                            ))
                        }
                    </tr>
                )
            )}
        </>
    )
}