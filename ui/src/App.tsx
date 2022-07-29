import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Table from './pages/Table'
import Home from './pages/Home'
import Logout from './pages/Logout'
import Error404 from './pages/Error404'

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="interview" element={<Table />} />
      <Route path="logout" element={<Logout />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}