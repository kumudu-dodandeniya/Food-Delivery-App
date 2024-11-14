import React from 'react'
import Nevbar from './components/Nevbar/Nevbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'

const App = () => {
  return (
    <div className='app'>
    <Nevbar> </Nevbar>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/order' element={<PlaceOrder/>}/>
    </Routes>
    </div>
  )
}

export default App