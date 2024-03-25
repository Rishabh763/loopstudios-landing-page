import React from 'react'
import Work from './Components/Work'
import Footer from './Components/Footer'
import Hero from './Components/Hero'

function App() {
  return (
    <div className='content-grid'>
      <Hero/>
       <p className='text-center text-2xl '>
         About
           Careers
           Events
           Products
           Support
         
           Immersive experiences that deliver
         
           The leader in interactive VR
         
           Founded in 2011, Loopstudios has been producing world-class virtual reality 
           projects for some of the best companies around the globe. Our award-winning 
           creations have transformed businesses through digital experiences that bind 
           to their brand.
       </p>
        <Work/>
        <Footer/>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  )
}

export default App
