'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'

const TdGraphics = () => {
  const [isClient, setIsClient] = useState(false)
  const matches = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // or a loading indicator, or a default view
  }

  return (
    <>
      {matches ? (
        <iframe
          src='https://my.spline.design/retrofuturismbganimation-05267393b9e06aacc4c5fed930104250/'
          className='absolute h-full -z-1'
          width='120%'
          height='120%'
        ></iframe>
      ) : (
        <Image
          width={1920}
          height={1080}
          src='/images/background.jpg'
          objectFit='cover'
          alt='bg-graphics'
          className='absolute h-full w-full object-cover'
        />
      )}
    </>
  )
}

export default TdGraphics