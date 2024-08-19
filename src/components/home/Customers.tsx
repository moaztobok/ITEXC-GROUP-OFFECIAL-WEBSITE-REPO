import React from 'react'
import { FadeElement } from '../magicui/fade-text'
import { customerData } from '@/data/data'
import CustomerCards from './Components/CustomerCards'

const Customers = () => {
    return (
        <section className="min-h-screen grid items-center relative overflow-hidden">
            <FadeElement>
                <div className='flex flex-col wrapper gap-6'>
                    <span className="font-semibold">Our Customers</span>
                    <h2 className="justify-start text-4xl font-bold md:max-w-[50%]">
                        Transforming Businesses Through Innovative Solutions</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                        {customerData.map((data, index) =>
                            <FadeElement key={index}>
                                <CustomerCards title={data.title} description={data.description} image={data.image} url={data.url} />
                            </FadeElement>
                        )}
                    </div>
                </div>
            </FadeElement>

        </section>
    )
}

export default Customers