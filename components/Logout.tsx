import React from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";
const Logout = () => {
  return (
    <div className='fixed bottom-10 right-10 z-[999]'>
        <div className='flex items-center gap-2 text-white  '>
            <RiLogoutCircleLine className='h-6 w-6'/>
            <h1 className='text-md underline'>Logout</h1>
        </div>
    </div>
  )
}

export default Logout