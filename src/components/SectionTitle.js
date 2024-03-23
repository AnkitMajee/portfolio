// SectionTitle.js
import React from 'react';

function SectionTitle({ title }) {
  return (
    <div className='flex gap-10 items-center py-10'>
        <h1 className='text-white text-4xl'>{title}</h1>
        <div className='bg-secondary h-[1px] w-50'></div>
    </div>
  );
}

export default SectionTitle;
