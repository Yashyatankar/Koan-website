import React from 'react'

export default function Footer() {
  return (
    <footer className='w-full bg-black text-white px-12 py-16 flex flex-col gap-16'>
      
      {/* Top Row */}
      <div className='flex justify-between items-start'>
        <div className='flex flex-col gap-2'>
          <span className='font-[Cormorant_Garamond] text-2xl tracking-widest uppercase'>KŌAN Studio</span>
          <span className='text-white/40 text-xs tracking-[0.2em] uppercase'>Objects stripped to their essence.</span>
        </div>

        <div className='flex gap-16 text-xs tracking-[0.2em] uppercase text-white/50'>
          <div className='flex flex-col gap-3'>
            <span className='text-white/20 mb-1'>Navigate</span>
            <a href='#' className='hover:text-white transition-colors duration-300'>Collection</a>
            <a href='#' className='hover:text-white transition-colors duration-300'>Craftsmanship</a>
            <a href='#' className='hover:text-white transition-colors duration-300'>About</a>
          </div>
          <div className='flex flex-col gap-3'>
            <span className='text-white/20 mb-1'>Contact</span>
            <a href='#' className='hover:text-white transition-colors duration-300'>Instagram</a>
            <a href='#' className='hover:text-white transition-colors duration-300'>studio@koan.co</a>
            <a href='#' className='hover:text-white transition-colors duration-300'>Kyoto, Japan</a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='w-full h-px bg-white/10' />

      {/* Bottom Row */}
      <div className='flex justify-between items-center text-white/20 text-xs tracking-[0.2em] uppercase'>
        <span>© 2025 KŌAN Studio</span>
        <span>Handcrafted with intention</span>
      </div>

    </footer>
  )
}