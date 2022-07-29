import React from "react"

export default function TableHeader () {
    const headers = ['Time', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

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