import React from "react"
import { headers } from "../settings"

export default function TableHeader () {
    return (
        <tr>
            {headers.map((element) => (
                <th key={element} scope="col" className="py-3 px-6 border text-center">
                    {element}
                </th>
            ))}
        </tr>
    )
}