import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Routes> 
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/courses/:id' element={<CourseDetails />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

 {/* <Home /> */}
       {/* <Product /> */}
      {/* <About /> */}