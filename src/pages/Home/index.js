import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'

function Home() {
  return (
    <div >
      <Header />
      <div className='bg-primary px-40 xm:px-5'>
        <Intro />
        <About />
        <Experiences />
        <Projects />
      </div>
    </div>
  )
}

export default Home