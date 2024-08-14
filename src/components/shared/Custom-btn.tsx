import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
export const CustomButton = ({ label, className, onClick }: { label: string, className?: string, onClick?: () => void }) => {
    return (

        <Button onClick={onClick} className={cn('rounded-none py-6 px-8', className)}>
            {label}
        </Button>
    )
}

