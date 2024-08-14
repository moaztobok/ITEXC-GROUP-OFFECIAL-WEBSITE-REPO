import Image from 'next/image'
import { FadeElement } from '../magicui/fade-text'
import { CustomButton } from '../shared/Custom-btn'
import TdGraphics from './TdGraphics'

const HeroSection = () => {
    return (
        <div className='h-screen bg-black grid items-center text-white relative overflow-hidden'>
            <TdGraphics />
            <FadeElement className='absolute top-0 left-0 w-full h-full md:hidden'>
                <Image width={1920} height={1080} alt='bg-image' src='/images/background.jpg' className='object-cover absolute w-full h-full top-0 left-0 md:hidden' />
            </FadeElement>
            <FadeElement >

                <div className='wrapper flex flex-col md:justify-center items-center relative z-2  overflow-hidden'>
                    <h2 className='md:text-5xl md:w-auto w-full text-3xl font-semibold'>Next-gen enterprise</h2>
                    <h1 className='md:w-auto w-full md:text-7xl text-4xl font-bold'>Ready to persue excellence</h1>
                    <p className='md:w-auto w-full text-left md: mt-4 text-base '>Empowering businesses with cutting-edge software development, design, and system integration</p>
                    <div className='mt-10 flex font-normal w-full md:w-auto gap-4'>
                        <CustomButton label='Get started' className='text-lg border border-primary' />
                        <CustomButton label='How it works' className='text-lg text-foreground bg-transparent outline-2 hover:bg-white/20 outline-white text-white border' />
                    </div>
                </div>
            </FadeElement>
        </div >
    )
}

export default HeroSection