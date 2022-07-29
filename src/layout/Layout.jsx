import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Layout = ({children}) => {
  return (
    <div className='app-layout'>
      <Header/>
      {children}

    <Footer/>
    </div>
  )
}

export default Layout
