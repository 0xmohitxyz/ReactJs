import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-16 py-6'>
        <h4 className='bg-black text-white px-5 py-3 rounded-full uppercase'>Target Audience</h4>
        <button className='text-black bg-gray-200 uppercase tracking-wider text-sm'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar