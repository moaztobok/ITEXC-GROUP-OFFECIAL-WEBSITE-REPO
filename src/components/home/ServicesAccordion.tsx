import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { CustomButton } from '../shared/Custom-btn'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

const ServicesAccordion = () => {
    return (
        <Accordion type="single" collapsible className="w-full md:max-w-[65%]">
            <AccordionItem value="item-1">
                <AccordionTrigger className='hover:no-underline'>
                    <div className='flex gap-4 items-end'>
                        <Image width={32} height={32} src='./icons/software-icon.svg' alt='software-icons' /><span>Software engineering</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className='flex flex-col gap-4 md:ps-6'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..
                    <CustomButton label={<ArrowRight className='text-xs' width={16} />} className='text-sm p-1 aspect-square w-fit h-fit bg-white text-primary rounded-full  hover:bg-white/90 font-semibold' />
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className='hover:no-underline'>
                    <div className='flex gap-4 items-end'>
                        <Image width={32} height={32} src='./icons/design-icon.svg' alt='design-icons' /><span>Design and branding</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className='flex flex-col gap-4 md:ps-6'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..
                    <CustomButton label={<ArrowRight className='text-xs' width={16} />} className='text-sm p-1 aspect-square w-fit h-fit bg-white text-primary rounded-full  hover:bg-white/90 font-semibold' />
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className='hover:no-underline'>
                    <div className='flex gap-4 items-end'>
                        <Image width={32} height={32} src='./icons/erp-icon.svg' alt='erp-icons' /><span>Enterprise resource planning</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className='flex flex-col gap-4 md:ps-6'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..
                    <CustomButton label={<ArrowRight className='text-xs' width={16} />} className='text-sm p-1 aspect-square w-fit h-fit bg-white text-primary rounded-full  hover:bg-white/90 font-semibold' />
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className='border-b-0'>
                <AccordionTrigger className='hover:no-underline'>
                    <div className='flex gap-4 items-end'>
                        <Image width={32} height={32} src='./icons/hr-icon.svg' alt='hr-icons' /><span>Human resource services</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className='flex flex-col gap-4 md:ps-6'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..
                    <CustomButton label={<ArrowRight className='text-xs' width={16} />} className='text-sm p-1 aspect-square w-fit h-fit bg-white text-primary rounded-full  hover:bg-white/90 font-semibold' />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default ServicesAccordion