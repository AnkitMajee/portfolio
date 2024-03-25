import React from 'react'
import Header from '../../components/Header';
import Intro from './Intro';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Courses from './Courses';
import Contact from './Contact';
import Footer from './Footer';
import LeftSider from './LeftSider';
//import Loader from '../../components/Loader';
import { useSelector } from 'react-redux';

function Home() {
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div >
      <Header />
      {portfolioData && (
        <div className='bg-primary px-20 sm:px-5'>
          <Intro/>
          <About />
          <Experiences />
          <Projects />
          <Courses />
          <Contact />
          <Footer />
          <LeftSider />
        </div>
      )}
      
    </div>
  )
}

export default Home;