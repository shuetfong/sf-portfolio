import React from 'react'
import Navbar from '../components/Navbar'
import Background from '../components/Background'
import Footer from '../components/Footer'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <main className='font-[family-name:var(--font-geist-mono)]'>
      <Background />
      <Navbar/>
      {children}
      <Footer />
    </main>
  )
}
