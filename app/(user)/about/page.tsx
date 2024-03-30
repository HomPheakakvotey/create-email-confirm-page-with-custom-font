import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
  title: "About Us",
  description: "About Us",
  openGraph:{
    title: "About Us",
    description: "About Us",
    images:"https://i.pinimg.com/564x/cc/f2/c4/ccf2c423b38ac5d7050c8f72310a0e53.jpg"
  },
}
export default function page() {
  return (
    <div className='h-screen grid place-content-center text-6xl'>About Page</div>
  )
}
