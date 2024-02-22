import React from 'react'
import { BookOpen, Book } from 'lucide-react'
import Image from 'next/image'

function SideNavbar() {

    const menu = [
        {
            id: 1,
            name: 'Semua Kursus',
            icon: BookOpen
        },
        {
            id: 2,
            name: 'Kursus Saya',
            icon: Book
        },
    ]

  return (
    <div className='p-5 bg-slate-950 shadow-lg h-screen'>
        <Image src='/logo.png' alt='logo'width={170} height={80}/>
        <hr className='mt-7' />
        <div>
            {menu.map((item) => (
                <div className='flex gap-3 mt-1 p-3 text-white text-[18px] items-center cursor-pointer
                hover:bg-primary
                hover:bg-opacity-10
                rounded-md
                transition-all
                duration-300
                ease-in-out
                group
                '>
                    <item.icon size='24' className='group-hover:animate-bounce' />
                    <span className='text-white'>{item.name}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideNavbar