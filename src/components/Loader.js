import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-between fixed inset-0 bg-primary'>
        <div className='flex gap-5 text-4xl font-semibold sm:text-3xl'>
            <h1 className='text-secondary A'>A</h1>
            <h1 className='text-white M'>M</h1>
            <h1 className='text-tertiary s'>s'</h1>
        </div>
    </div>
  )
}

export default Loader