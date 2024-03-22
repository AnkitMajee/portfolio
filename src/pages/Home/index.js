import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro' // Fix: Change the import statement to './intro'

function Home() {
  return (
    <div >
    <Header />
      <div className='bg-primary px-40'>
        <Intro />
      </div>
    </div>  
  )
}

export default Home