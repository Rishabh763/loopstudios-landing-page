import React from 'react'

function About() {
  return (
    <div className='py-24'>
         <div className="about-grid">
            <img className='interactive' src="/assets/images/desktop/image-interactive.jpg" alt="about image" />

             <div className="text p-0 md:p-24 md:pb-0">
                 <h2 className='text-5xl'>The leader in interactive VR</h2>
                 
                 <p>
                     Founded in 2011, Loopstudios has been producing world-class virtual reality
                     projects for some of the best companies around the globe. Our award-winning
                     creations have transformed businesses through digital experiences that bind
                     to their brand.
                 </p>
             </div>
         </div>

    </div>
  )
}

export default About