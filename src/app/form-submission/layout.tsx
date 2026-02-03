import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
    title: "SNIPPETS",
    description: "Store your login details here..."
}

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default layout
