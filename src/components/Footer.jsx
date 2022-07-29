import React from 'react'
import { Icon } from '@iconify/react';
import {  NavLink } from "react-router-dom"

function Footer() {
  return (
    <footer className='app-footer'>
      <div className='menu-inner'>
        <NavLink to='/' className={(navData)=> navData.isActive ? "menu-item active": 'menu-item'}><Icon icon="mdi:home" /></NavLink>
        <button className='menu-item'><Icon icon="mdi:car-shift-pattern" /></button>
        <NavLink to='/card' className={(navData)=> navData.isActive ? "menu-item active": 'menu-item'}><Icon icon="arcticons:samsung-shop" /></NavLink>
        <button className='menu-item'> <Icon icon="mdi:account" /></button>
      </div>
    </footer>
  )
}

export default Footer
