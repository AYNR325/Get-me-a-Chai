import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-violet-950 text-white flex items-center justify-center px-4 h-16'>
        <p className='text-center'>Copyright &copy; {currentYear} Get me A Chai - All rights reserved!</p>
    </footer>
  )
}

export default Footer