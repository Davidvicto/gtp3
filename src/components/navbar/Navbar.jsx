import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo1.svg'
import './navbar.css'

const Menu = () => (
  <>
  <p><a href='#Home'>Home</a></p>
  <p><a href='#gpt3'>What is GPT?</a></p>
  <p><a href='#possibility'>Open AI</a></p>
  <p><a href='#features'>Case Studies</a></p>
  <p><a href='#blog'>Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setMenuToggle] = useState (false)
  return (
    <div className='gtp3__navbar'>
      <div className='gtp3__navbar-links'>
        <div className='gtp3__navbar-links_logo'> 
        <img src={logo} alt='logo'/>
        </div>
        <div className='gtp3__navbar-links_container '>
          <Menu />
        </div>
      </div>
      <div className='gtp3__navbar-sign'>
        <p> Sign In</p>
        <button type='submit'>Sign Up</button>
      </div>
      <div className='gtp3_navbar-menu'>
        {toggleMenu 
        ? <RiCloseLine color='#fff' size={27} onClick = {() => setMenuToggle(false)}/> : 
          <RiMenu3Line color='#fff' size={27} onClick = {() => setMenuToggle(true)}/> }
        {toggleMenu && (
        <div className='gtp3__navbar-menu_container scale-up-center'>
           <div className='gtp3__navbar-menu_container-links'>
            <Menu />
           </div>
          <div className='gtp3__navbar-menu_container-links-signs'>
            <p>Sign In</p>
          <button type='button'>Sign Up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;