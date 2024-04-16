import React from 'react'
import Image from 'next/image';
import logoWhite from '../public/images/logoWhite.png'

const LogoWhite = () => {
  return (
    <div className=''>
        <div className='flex items-center' >
            <Image src={logoWhite} alt='logo' className='w-10'/>
            <p className='text-white text-xl font-semibold'>twc</p>
        </div>
        <h1 className='text-xl text-white font-bold'>contacts<br/>
        <span className='font-semibold'> portal</span></h1>
      
    </div>
  )
}

export default LogoWhite
