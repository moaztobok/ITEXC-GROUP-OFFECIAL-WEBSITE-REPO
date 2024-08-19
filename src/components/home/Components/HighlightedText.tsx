import React, { ReactNode } from 'react'

const HighlightedText = ({ children }: { children: ReactNode }) => {
    return (
        <span className='text-primary'>
            {children}
        </span>
    )
}

export default HighlightedText