import { useState } from 'react'
// import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {
 return (
    <>
    <div className='max-w-4xl mx-auto pt-16'></div>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
