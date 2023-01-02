import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import More from '../Component/Body/More'
import About from '../Component/Pages/About'
import Home from '../Home'

const Rout1 = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/'>
            <Route path='' element={<Home />} /> 
            <Route path='/more' element={<More />} />
            <Route path='/about' element={<About />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Rout1
