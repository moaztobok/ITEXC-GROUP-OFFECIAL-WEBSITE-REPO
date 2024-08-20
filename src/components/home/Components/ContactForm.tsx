'use client'
import { CustomButton } from '@/components/shared/Custom-btn'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        message: ''
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) =>
            ({ ...prev, [e.target.name]: e.target.value }))
        console.log(formData)
    }
    const handleSubmit = () => {
        console.log(formData)
    }
    return (
        <form className='flex flex-col gap-4 w-full max-w-md' onSubmit={() => handleSubmit()}>
            <Input placeholder='Email' name='email' onChange={(e) => handleChange(e)} className='p-4 py-6 rounded-none placeholder:text-muted-foreground text-lg border-muted-foreground' />
            <Input placeholder='Full name' name='fullName' onChange={(e) => handleChange(e)} className='p-4 py-6 rounded-none placeholder:text-muted-foreground text-lg border-muted-foreground' />
            <Textarea placeholder='Message' name='message' onChange={(e) => handleChange(e)} className='p-4 rounded-none min-h-48 placeholder:text-muted-foreground text-lg border-muted-foreground' />
            <CustomButton label='Submit' />
        </form>
    )
}

export default ContactForm