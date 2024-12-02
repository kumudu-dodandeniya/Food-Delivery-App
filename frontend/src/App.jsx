import React, { useState } from 'react'
import Nevbar from './components/Nevbar/Nevbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'

const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin? <Login setShowLogin = {setShowLogin}/>:<></>}

      <div className='app'>
      <Nevbar setShowLogin={setShowLogin} /> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App