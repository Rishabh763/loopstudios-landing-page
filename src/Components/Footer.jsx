import React from 'react'
function Footer() {
  return (
  <div className="full-width bg-black">    
        <footer className= ' text-white py-12'>
            <div className="logo">
                <img src="/assets/images/logo.svg" alt="loopstudios logo" />
            </div>
            <div className="social flex gap-6">
                <img src="/assets/images/icon-facebook.svg" alt="facebook" />
                <img src="/assets/images/icon-twitter.svg" alt="twitter" />
                <img src="/assets/images/icon-pinterest.svg" alt="pinterest" />
                <img src="/assets/images/icon-instagram.svg" alt="instagram" />
            </div>
            <nav>
                <ul className='list-none flex flex-col gap-3 md:flex md:flex-row items-center text-center md:gap-10 text-lg text-slate-200'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </nav>
            <div className="copyright text-slate-400 font-medium">© 2021 Loopstudios. All rights reserved.</div>
        </footer>
  </div>
  )
}

export default Footer