import React, { useState } from 'react'
import './Nevbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Nevbar = () => {
 //state
  const [menu,setMenu] = useState("Home")


  return (
    <div className='navbar'>
    <img src={assets.logo } alt="" className='logo' />
    <ul className="navebar-manu">
      <Link to= '/' onClick={()=>setMenu("Home")} className={menu=== "Home"?"active":""}>Home</Link>
      <a href="#explore-menu"onClick={()=>setMenu("Manu")} className={menu=== "Manu"?"active":""}>Manu</a>
      <a href='#app-download' onClick={()=>setMenu("Mobile-app")}className={menu=== "Mobile-app"?"active":""}>Mobile-app</a>
      <a href='#footer' onClick={()=>setMenu("Contact-Us")}className={menu=== "Contact-Us"?"active":""}>Contact Us</a>
    </ul>
    <div className="navbar-right">
      <img src={assets.search_icon} alt="" />
      <div className="navbar-search-icon">
        <img src={assets.basket_icon} alt="" />
        <div className="dot"></div>
      </div>
      <button>sign in</button>
    </div>
    </div>
  )
}

export default Nevbar