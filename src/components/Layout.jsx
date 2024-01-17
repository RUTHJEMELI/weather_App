import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import weatherAppBg from '../assets/backgroun.webp'

const Layout = () => {
  return (
      < div
         className='h-screen bg-cover bg-no-repeat relative m-0 p-0'
      style={{
        backgroundImage: `url(${weatherAppBg})`,
        backgroundSize: 'cover', // or 'contain'
        backgroundPosition: 'center center',
      }}
      >
          <Header />
            <Outlet />
          <Footer />
      </div>
  )
}

export default Layout