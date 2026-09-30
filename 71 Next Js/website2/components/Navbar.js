import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <footer className='flex justify-between'>

    <div>
      I am a navbar
    </div>
    <ul className='flex ' >
        <Link href='/'><li className='px-5' >Home</li></Link>
        <Link href='/about'><li className='px-5'>About</li></Link>
        <Link href='/contact'><li className='px-5'>Contact</li></Link>
        
    </ul>
    </footer>
    
  )
}

export default Navbar
