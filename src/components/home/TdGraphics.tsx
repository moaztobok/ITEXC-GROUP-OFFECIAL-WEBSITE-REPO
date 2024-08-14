'use client'
import Image from 'next/image'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'

const TdGraphics = () => {
  const matches = useMediaQuery('(min-width: 768px)')

  return (
    <>
      {matches && <iframe src='https://my.spline.design/retrofuturismbganimation-05267393b9e06aacc4c5fed930104250/' className='absolute h-full -z-1' width='120%' height='120%'></iframe>
      }
      <Image src='/images/background.jpg' layout='fill' objectFit='cover' alt='bg-graphics' className='absolute h-full w-full' />
    </>

  )
}

export default TdGraphics