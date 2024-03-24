import React from 'react'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10 '>
     <h1 className='text-white'>I i aAm's</h1>
     <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>Ankit Majee</h1>
     <h1 className='text-7xl sm:text-3xl text-white font-semibold'>Ankit Majee id ma good boy am tae cakre of everu0kem</h1>
     <p className='text-tertiary w-2/3'>I am a software engineer with a passion for web development.
     I have experience in building web applications using JavaScript, React, and Node.js. 
     I am always looking for new opportunities to learn and grow as a developer.
     </p>
     <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
    </div>
  )
}

export default Intro