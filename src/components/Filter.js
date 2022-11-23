import React from 'react'

function Filter({icon,title}) {
  return (
    <div className=' text-gray-600 hover:text-[#f9787c] duration-100 ease-in text-gray-600 py-2 px-3  items-center '>
        <div id='icons' className='text-[35px]'>
            {icon}
        </div>
        {title}
    </div>
  )
}

export default Filter