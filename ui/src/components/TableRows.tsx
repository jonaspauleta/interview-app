import React from "react"
import TableRow from "./TableRow"

export default function TableRows () {
    const times = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    const weekDays = [0, 1, 2, 3, 4]

    return (
        <>
            {times.map((time) => (
                    <tr key={time} className="bg-white border-b">
                        <th scope="row" className="max-w-fit py-4 px-6 border font-medium text-center text-gray-900 whitespace-nowrap">
                            {time}:00 - {time}:59
                        </th>

                        {
                            weekDays.map((weekDay) => (
                                <TableRow key={weekDay} />
                            ))
                        }
                    </tr>
                )
            )}
        </>
    )
}