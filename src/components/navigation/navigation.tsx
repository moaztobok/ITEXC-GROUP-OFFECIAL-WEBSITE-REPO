'use client'
import React, { useEffect } from 'react'
import { Icon } from './icon'
import Link from 'next/link'
import { CustomButton } from '../shared/Custom-btn'
import { cn } from '@/lib/utils'

const Navigation = () => {
    const [isScrolled, setIsScrolled] = React.useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={cn('fixed top-0 left-0 w-full h-fit z-30 transition-all duration-500', isScrolled ? 'bg-black/75 backdrop-blur-3xl' : 'bg-transparent')}>
            <div className='wrapper py-3  flex justify-between items-center'>
                <Icon icon={isScrolled ? '#1F00FF' : 'white'} wordmark={isScrolled ? 'white' : 'white'} />
                <div className={cn('gap-6 items-center hidden md:flex text-white ', isScrolled ? 'text-white' : '')}>
                    <Link href='/services'>
                        Services</Link>
                    <Link href='/units'>
                        Our units</Link>
                    <Link href='/careers'>
                        Careers</Link>
                    <Link href='/about-us'>
                        About us</Link>
                    <Link href='/consulting'>
                        Consulting</Link>
                    <CustomButton label='Contact us' />
                </div>
            </div>
        </div>
    )
}

export default Navigation