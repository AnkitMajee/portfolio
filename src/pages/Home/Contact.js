import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function Contact() {
    const user = {
        name: 'John Doe',
        email: 'dsdklj@gmail.com',
        phone: '1234567890',
        address: '123 Main St, New York, NY 10001'
    }
  return (
    <div>
        <SectionTitle title="Hi! there" />
        <div className='flex'>
            <div className='flex flex-col gap-3'>
            <p className='text-white text-md'>{"{"}</p>
            {Object.keys(user).map((key) => (
                <p className='ml-5'>
                <span className='text-white'>{key} :</span>
                <span className='text-secondary'>{user[key]}</span>
                </p>
                
            ))}
            <p className='text-white text-md'>{"}"}</p>

            </div>
    </div>
    </div>
  )
}

export default Contact