import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import {experiences} from '../../resources/experiences'

function Experiences() {
  return (
    <div>
        <SectionTitle title="Experiences" />
        <div className='flex'>
            {Experiences.map((experience) => (
                <div>
                    <h1 className='text-xl text-white'>{experience.period}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experiences