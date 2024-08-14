import React from 'react'
import TdGraphics from './TdGraphics'
import { Button } from '../ui/button'
import { CustomButton } from '../shared/Custom-btn'

const HeroSection = () => {
    return (
        <div className='h-screen bg-black grid items-center text-white relative'>
            <TdGraphics />
            <div className='wrapper flex flex-col md:justify-center items-center relative z-2  overflow-hidden'>
                <h2 className='md:text-5xl md:w-auto w-full text-3xl font-semibold'>Next-gen enterprise</h2>
                <h1 className='md:w-auto w-full md:text-7xl text-4xl font-bold'>Ready to persue excellence</h1>
                <p className='md:w-auto w-full text-left md: mt-4 text-base '>Empowering businesses with cutting-edge software development, design, and system integration</p>
                <div className='mt-10 flex font-normal w-full md:w-auto gap-4'>
                    <CustomButton label='Get started' className='text-lg border border-primary' />
                    <CustomButton label='How it works' className='text-lg text-foreground bg-transparent outline-2 hover:bg-white/20 outline-white text-white border' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection