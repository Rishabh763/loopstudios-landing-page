import React from 'react'

function Hero() {
  return (
    <div className='full-width h-screen overflow-hidden grid items-center'>
        <img className='w-full h-full absolute inset-0 object-cover z-[-1]' src="/assets/images/desktop/image-hero.jpg" alt="" />

        <h1 className='text-8xl uppercase max-w-[60%] p-6 border-4 border-white text-white font-light'>
        Immersive experiences that deliver
        </h1>

    </div>
  )
}

export default Hero