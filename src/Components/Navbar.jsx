import React,{useState} from 'react'

function Navbar() {
  const [open,setOpen] = useState(false);

  function  handleClick(){
    setOpen(!open)
  }

  return (
    <div className='fixed top-0 left-0 right-0 z-1000 py-10 px-8 md:px-16  lg:px-24 flex justify-between'>
      <div className="logo cursor-pointer z-1"><img src="/assets/images/logo.svg" alt="Logo" /></div>

      <div className={`hamburger ${open ? 'toggle' : ''}`} onClick={handleClick}>
        <div className={`line1`}></div>
        <div className={`line2`}></div>
        <div className={`line3`}></div>
      </div>
      <ul className={`nav-links flex items-center gap-6 text-xl text-white ${open ? 'open' : ''}`}>
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Support</a></li>
      </ul>
           
    </div>
  )
}

export default Navbar