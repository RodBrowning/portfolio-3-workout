import './style.css'

import React, { useState } from 'react'

const Heading = () => {
  const [show, setShow] = useState(false);
  return (
    <header className='container header__container'>
      <div className='header__logo'>
        <h2 className='text-size-2'>
          WORKOUT
        </h2>
      </div>
      <nav className={show ? '' : 'hide'}>
        <a href="">
          EXERCISES
        </a>
        <a href="">
          TRAINERS
        </a>
        <a href="">
          PRICING
        </a>
        <a href="">
          LOGIN
        </a>
      </nav>
      <div className='header__nav-button'>
        {/*dots*/}
        <svg onClick={()=> setShow(!show)} className={show ? 'hide' : ''} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><circle cx="16" cy="8" r="2" fill="currentColor"/><circle cx="16" cy="16" r="2" fill="currentColor"/><circle cx="16" cy="24" r="2" fill="currentColor"/></svg>
        {/*dash*/}
        <svg onClick={()=> setShow(!show)} className={show ? '' : 'hide'} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
      </div>
    </header>
  )
}

export default Heading