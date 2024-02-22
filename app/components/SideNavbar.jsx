import React from 'react'
import { BookOpen, Book } from 'lucide-react'
import Image from 'next/image'
import Logo from '@/components/Logo'

function SideNavbar() {

    const menu = [
        {
            id: 1,
            name: 'Semua Materi',
            icon: BookOpen
        },
        {
            id: 2,
            name: 'Materi Saya',
            icon: Book
        },
    ]

  return (
    <div className='p-5 dark:bg-slate-900 dark:shadow-white bg-white shadow-md h-screen'>
        <Logo />
        <hr className='mt-7' />
        <div>
            {menu.map((item) => (
                <div className='flex gap-3 mt-1 p-3 text-[18px] items-center cursor-pointer
                hover:bg-primary
                hover:bg-opacity-10
                rounded-md
                transition-all
                duration-300
                ease-in-out
                group
                '>
                    <item.icon size='24' className='group-hover:animate-bounce text-primary' />
                    <span className="dark:text-white">{item.name}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideNavbar