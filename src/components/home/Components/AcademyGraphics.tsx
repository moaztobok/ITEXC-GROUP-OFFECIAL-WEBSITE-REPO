import { FadeElement } from '@/components/magicui/fade-text'
import Image from 'next/image'
import React from 'react'

const AcademyGraphics = () => {
    return (
        <FadeElement className='w-full md:flex-[0.5] mb-10 md:mb-0'>
            <div className=' w-full relative flex items-center justify-center select-none aspect-square'>
                <Image src='./images/Emblem-circle.svg' className='animate-spin transition-none transition-transform  select-none duration-10000 md:w-3/4 w-full h-full top-0 left-0 md:h-3/4' width={400} height={500} alt='circle' />
                <Image src='./images/Academy-Logo.svg' className=' w-[40%] h-[40%] mb-5 md:mb-8 absolute  pointer-events-none' width={400} height={500} alt='circle' />
            </div>
        </FadeElement>
    )
}

export default AcademyGraphics