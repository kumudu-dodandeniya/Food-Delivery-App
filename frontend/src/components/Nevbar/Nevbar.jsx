import React, { useState } from 'react'
import './Nevbar.css'
import { assets } from '../../assets/assets'

const Nevbar = () => {
 //state
  const [menu,setMenu] = useState("Home")


  return (
    <div className='navbar'>
    <img src={assets.logo } alt="" className='logo' />
    <ul className="navebar-manu">
      <li onClick={()=>setMenu("Home")} className={menu=== "Home"?"active":""}>Home</li>
      <li onClick={()=>setMenu("Manu")} className={menu=== "Manu"?"active":""}>Manu</li>
      <li onClick={()=>setMenu("Mobile-app")}className={menu=== "Mobile-app"?"active":""}>Mobile-app</li>
      <li onClick={()=>setMenu("Contact-Us")}className={menu=== "Contact-Us"?"active":""}>Contact Us</li>
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