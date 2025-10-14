import React from 'react'
import { Link } from 'react-router'

const Interested = () => {
  return (
    <div className='px-[160px] mt-[150px] text-[#EDF0F7]  mb-[150px]'>
      <div className="h-[138px] rounded-[3px] flex justify-between items-center px-8 bg-[#7E62F3]/10">
            <h1 className='text-4xl font-bold'>Interested working with me?</h1>
            <div className="flex gap-4">
              <Link to="/projects" className='px-5 py-2 border border-[#7E62F3] font-semibold'>See More Project</Link>
              <Link to="/contact" className='px-5 py-2 bg-[#7E62F3] font-semibold'>Contact Me</Link>
            </div>
      </div>
    </div>
  )
}

export default Interested
