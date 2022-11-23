import React from 'react'
import {AiFillStar} from "react-icons/ai"



function Rental({image, title,price,rating,name}) {
  return (
    <div className="mx-1 mb-12 relative">
        <div className=' grad absolute w-full h-full rounded-b-[1.3rem]'></div>
            <div className='flex image-wrapper'>
                <img src={image} alt={title} id='prop' className=" rounded-[1.3rem] object-cover " />
                <div className=' absolute bottom-6 left-3  text-white text-[22px] bold '>
                   <div className=' flex justify-start text-[13px] gap-1 '> <p>{rating}</p>  <AiFillStar className=' mt-1 '/>  </div>
                    {title}
                    <p>{price}</p>
                </div>
            </div>
        {/*Description */}
        <div className=' absolute  ml-2 mt-3  '>
            <div>
                <p className='ma-w[17rem] font-bold text-[17px]'>{name} </p>   
                <p className='text-gray-600 text-[15px] text-start'>Jan 28 - Aug 9</p>
            </div>
        </div>    
    </div>
  )
}

export default Rental