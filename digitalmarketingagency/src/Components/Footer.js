import React from 'react'
import { Fredoka } from 'next/font/google'
import Link from 'next/link'
const fredokafont=Fredoka({weight:'700', subsets:['latin']})
const Footer = () => {
  return (
    <>
      <div className='flex flex-col  w-[98%] h-96 bg-[#16423C] rounded mx-auto'>
        <div className='bg-transparent flex flex-col justify-center items-center py-20 text-white'>
          <h1 className={`${fredokafont.className} leading-snug bg-transparent text-6xl`} >Have any Project Idea!</h1>
          <h1 className={`${fredokafont.className} leading-snug bg-transparent text-6xl`} >let's chat with us</h1>
          <button className="bg-white rounded-full w-[10%] justify-center py-3 font-bold after:content-['*'] text-black">Get in Touch</button>
        </div>
        <hr />
        <div className='bg-[#16423C] flex justify-between  px-6 py-6 text-white'>
          <div className='uppercase flex flex-col gap-3 list-none'>
            <h3 className='text-neutral-400'>Quick Start</h3>
            <div className='flex gap-4'>
            <Link className='uppercase' href={"/"}>Home</Link> 
            <Link className='uppercase' href={"/"}>Works</Link> 
            <Link className='uppercase' href={"/"}>About-Us</Link> 
            <Link className='uppercase' href={"/"}>Services</Link> 

            </div>
          
          </div>
          <div className='flex flex-col gap-4'>
          <h3 className='text-neutral-400'>Contact us</h3>
          <div>
            contact@gmail.com
          </div>
            
          </div>
          <div className='flex flex-col gap-3 uppercase list-none'>
          <h3 className='inline-flex text-neutral-400'>Stay Updated</h3>
          <div className='flex gap-4'>
            <Link href={"/"}>Facebook</Link>
            <Link href={"/"}>Instagram</Link>
            <Link href={"/"}>Twitter(X)</Link>
            <Link href={"/"}>LinkedIN</Link>
          </div>
          </div>
        </div>
        <hr/>
        <div className=' flex justify-between text-neutral-400 bg-[#16423C] px-5 py-4'>
          <div>
            copyright@developer.com
          </div>
          <div>
            privacy and policy
          </div>
          <div>
            Website terms
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer