import React from 'react'

function Header() {
  return (
    <header className='app-header'>
      <div className="header-logo">
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="header-title">
        Home
      </div>
      <div className="header-button">

        <button className="avatar">
          <img src="img/1.webp" alt='avatar' />
        </button>
      </div>
    </header>
  )
}

export default Header
