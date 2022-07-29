import React, { useState } from "react"

export default function TableRow () {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(prevActive => !prevActive)
    }

    return  (
        <td className='border' onClick={handleClick}>
        </td>
    )
}