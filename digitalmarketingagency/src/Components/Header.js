import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import digiMlogo from '../public/images/digiM-logo.png'
import {Fredoka} from 'next/font/google';

const fredokafont=Fredoka({weight:'400', subsets:["latin"]})
const Header = () => {
  return (
    <>
    <nav className='flex justify-between w-[100%] h-24'>
        <div className='logo self-center px-4 py-7'>
        <Image 
        src={digiMlogo}
        width={120}
        height={60}
        alt="Picture of the author"
        />
        </div>
        <div className={`${fredokafont.className} flex gap-5 self-center bg-[#E9EFEC] px-5 py-3 rounded-full uppercase`}>
           <Link className='bg-transparent font-semibold text-lg hover:scale-110 hover:underline-offset-4 tracking-widest' href={"/"}>Home</Link> 
           <Link className='bg-transparent font-semibold text-lg hover:scale-110 hover:underline-offset-4 tracking-widest' href={"/"}>Works</Link> 
           <Link className='bg-transparent font-semibold text-lg hover:scale-110 hover:underline-offset-4 tracking-widest' href={"/"}>About us</Link> 
           <Link className='bg-transparent font-semibold text-lg hover:scale-110 hover:underline-offset-4 tracking-widest' href={"/"}>Services</Link> 
        </div>
        <div className='self-center'>
        <Link className=' font-semibold text-lg  bg-[#16423C] rounded-full py-3 px-5 text-white mx-5' href={"/"}>Let's Chat</Link> 
        </div>
    </nav>
    </>
  )
}

export default Header