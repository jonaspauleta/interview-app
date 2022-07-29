import React, { useState } from "react"

interface TableRowProps {
    time: string
    day: string
}

export default function TableRow ({time,day}:TableRowProps) {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(prevActive => !prevActive)
    }

    return  (
        <td className='border' onClick={handleClick}>
            <input
                name={time.toString + '_' + day.toString}
                className="text-center"
                type="checkbox"
                onChange={handleClick}
            />
        </td>
    )
}