import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import Image from 'next/image'

const ServicesAccordion = () => {
    return (
        <Accordion type="single" collapsible className="w-full md:max-w-[65%]">
            <AccordionItem value="item-1">
                <AccordionTrigger className='hover:no-underline'>
                    <div className='flex gap-4 items-end'>
                        <Image width={32} height={32} src='./icons/software-icon.svg' alt='software-icons' /><span>Is it accessible?</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className='hover:no-underline'>
                    <div className='flex gap-4 items-end'>
                        <Image width={32} height={32} src='./icons/design-icon.svg' alt='design-icons' /><span>Is it accessible?</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className='hover:no-underline'>
                    <div className='flex gap-4 items-end'>
                        <Image width={32} height={32} src='./icons/erp-icon.svg' alt='erp-icons' /><span>Is it accessible?</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className='hover:no-underline'>
                    <div className='flex gap-4 items-end'>
                        <Image width={32} height={32} src='./icons/hr-icon.svg' alt='hr-icons' /><span>Is it accessible?</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..</AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default ServicesAccordion