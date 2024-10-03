import React from 'react'
import "./globals.css"
//import codelogo from '../../public/images/codelogo.png'
import Image from 'next/image'
export const Landingpage = () => {
  return (
    <>
   
    <div className='landing bg-[#C4DAD2] grid grid-rows-3 gap-5 pt-5'>
      <div className='h-[10vh]'>
        <h1 className='text-6xl font-extrabold text-center'>Developmemt </h1>
        <h1 className='agency text-6xl font-extrabold text-center justify-center align-middle text-center'> Agency</h1>
      </div>
      <div className='h-[400px] justify-center text-center mx-5 my-auto'>
     
        <Image
        src='/images/teamwork.png'
        width={1600}
        height={400}
        alt='Team-Work Image'>
        </Image>
      </div>
      


      
      
      </div>
      </>
  )
}
