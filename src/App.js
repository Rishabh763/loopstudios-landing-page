import React from 'react'
import Work from './Components/Work'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import About from './Components/About'

function App() {
  return (
    <div className='content-grid'>
      <Hero/>
       <About/>
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
