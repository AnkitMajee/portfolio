// About.js
import React from 'react';
import SectionTitle from '../../components/SectionTitle';

function About() {
  const skills = ['JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'GitHub', 'Heroku'];
  return (
    <div>
      <SectionTitle title="About" />
      <div className='flex w-full items-center sm:flex-col'>
        <div className='h-[50vh] w-1/2 sm:w-full'>
          <lottie-player src="https://lottie.host/4f503a30-ed6a-47d6-b2ac-78a0b4e2a5f1/nQGPt5l1PE.json"
            background="##fff"
            speed="1"
          ></lottie-player>
        </div>
        <div className='flex flex-col gap-8 w-1/2 sm:w-full' >
        <div className='text-white'>
          <p>
            I am a software engineer with a passion for building web applications. I have experience in developing full-stack web applications using React, Node.js, and MongoDB. I am also skilled in using Git, GitHub, and Heroku. I have a strong foundation in computer science and I am always eager to learn new technologies. I am currently looking for opportunities to work as a software engineer.
          </p>
          <p>
            I have a Bachelor's degree in Computer Science from the University of California, Santa Cruz. I have completed several projects that demonstrate my skills in web development. I have also participated in hackathons and coding competitions. I am a quick learner and I am always looking for ways to improve my skills.
          </p>
        </div>
       </div>
      </div>
      <div className='py-5'>
        <h1 className="text-tertiary text-xl">
          Here are few technologies I've been working with recently:
        </h1>
        <div className='flex flex-wrap gap-10 mt-5'>
        {
          skills.map((skill, index) => (
            <div key={index} className='bg-secondary border border-tertiary px-5 py-3 rounded'>
              <h1 className='text-white'>{skill}</h1>
            </div>
            ))
        }
        </div>
       </div>
    </div>
  );
}

export default About;
