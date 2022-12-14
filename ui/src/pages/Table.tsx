import React, { useEffect, useState } from "react"
import TableHeader from "../components/TableHeader"
import TableRows from "../components/TableRows"
import Login from "../pages/Login"
import useToken from "../useToken"
import Layout from "../layout/Layout"
import axios from "axios"
import Slots from "../slots"
import useUser from "../useUser"
import {times, days} from '../settings'

export default function Table() {
  const { token, setToken } = useToken()
  const { user, setUser } = useUser()
  
  if (!token) {
    return <Login />
  }
  
  const initialState:Slots[] = []
  times.map((time) => {
    days.map((day) => {
      initialState.push({time: time, day:day, active:false})
    })
  })
  
  const [ slots, setSlots ] = useState(initialState)

  useEffect(() => {
    axios.get(
      '/api/view-slots/' + user.id,
      {
        baseURL: import.meta.env.VITE_API_ENDPOINT,
        headers: {
          'Accept': "application/json",
        },
      }
    ).then((resp) => {
      let data = resp.data.data

      for (let i in data) {
        setSlots(current =>
          current.map(obj => {
            if (obj.day === data[i].day && obj.time == data[i].time) {
              return {...obj, active: true}
            }
    
            return obj
          }),
        )
      }
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = slots.filter((slot) => {
      return slot.active
    }).map((a) => {
      return {day:a.day, time:a.time}
    })

    axios
      .post(
        "/api/set-slots",
        data,
        {
          baseURL: import.meta.env.VITE_API_ENDPOINT,
          headers: {
            'Accept': "application/json",
            'Authorization': `Bearer ${token}`
          },
        }
      )
      .then((resp: any) => {
        console.log(resp.data)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }

  return (
    <Layout>
      <div className="overflow-x-auto">
        <form onSubmit={handleSubmit}>
          <table className="w-full text-sm text-left text-gray-500 border-2">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <TableHeader />
            </thead>

            <tbody>
              <TableRows slots={slots} setSlots={setSlots} />
            </tbody>
          </table>

          <div className="mt-8 px-32">
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#3d3f6e] hover:bg-[#282957]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
