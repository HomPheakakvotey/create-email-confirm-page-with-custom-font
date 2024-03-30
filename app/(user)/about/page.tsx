import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
  title: "About Us",
  description: "About Us",
  openGraph:{
    title: "About Us",
    description: "About Us",
    images:"https://imgs.search.brave.com/XMnNObJZzHnZuYTAhMVgpaMH0uD7LSKI-uIbHCrZ8W4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly81WTNJbllwVVV6/YTE0U25fMDRrWEJL/cTE4b1E9Lzc0OHgy/MzY2OjEyNTF4Mjg2/OS9maXQtaW4vNTAw/eDUwMC85OWRlc2ln/bnMtY29udGVzdHMt/YXR0YWNobWVudHMv/MTIwLzEyMDgyMC9h/dHRhY2htZW50XzEy/MDgyMDg4Ng"
  },
}
export default function page() {
  return (
    <div className='h-screen grid place-content-center text-6xl'>About Page</div>
  )
}
