import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "FinPay payments",
  description: "India first payment app"
}

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='min-h-screen w-full bg-[#f0f7f8]'>
      {children}
    </div>
  )
}

export default layout
