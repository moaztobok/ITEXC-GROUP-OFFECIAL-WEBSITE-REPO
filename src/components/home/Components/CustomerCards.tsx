import ArrowButton from '@/components/shared/ArrowButton'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CustomerCards = ({ title, description, url, image }: { title: string, description: string, url: string, image: string }) => {
    return (
        <Card className='border-none flex w-full flex-col gap-4 shadow-none'>
            <div className=' w-full relative'>
                <Image width={600} height={100} alt={title} src={image} className='w-full object-cover aspect-[5/3]  top-0 left-0' />
            </div>
            <span className='text-lg font-semibold'>{title}</span>
            <span className='text-muted-foreground'>{description}</span>
            <Link href={url} className='inline-flex items-center gap-4'> Get Quote <ArrowButton className='p-0' /></Link>
        </Card>
    )
}

export default CustomerCards