import React from 'react'
import Filter from './Filter'
import {GiCampfire,GiSailboat,GiPalmTree} from "react-icons/gi"
import {FaCampground,FaKey} from "react-icons/fa"
import {RiAliensFill} from "react-icons/ri"





export const Filters = () => {
  
    const sorting = [
        {title:'Private', icon:<FaKey/>},
        {title:'Camp', icon:<FaCampground/>},
        {title:'New', icon:<GiCampfire/>},
        {title:'Boat', icon:<GiSailboat/>},
        {title:'Unique', icon:<RiAliensFill/>},
        {title:'Island', icon:<GiPalmTree/>}
    ];
  
    return (
    <div className='border-b flex justify-center space-x-auto mt-3 lg:mx-12 md:mx-10 sm:px-5'>
          <div className=' flex justify-center space-x-4 '>
            {sorting.map((obj) => (
            <Filter title={obj.title} icon={obj.icon} />
            ))}

          </div>
    </div>
  )
}

export default Filters; 