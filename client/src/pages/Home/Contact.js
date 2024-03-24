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
        <div className='flex sm:flex-col items-center justify-between'>
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
            <div className='h-[500px]'>
                <img src='https://images.unsplash.com/photo-1612831165343-2c9f4e2f0b3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' alt='contact' className='h-full w-full object-cover' />
            </div>
    </div>
    </div>
  )
}

export default Contact