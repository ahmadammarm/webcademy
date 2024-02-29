"use client"

import React, { useEffect } from 'react'
import { Code2 } from 'lucide-react'
import Logo from '@/components/Logo'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function SideNavbar() {
    const path = usePathname();

    useEffect(() => {
        console.log("path", path)
    }, [])

    const menu = [
        {
            id: 1,
            name: 'HTML',
            icon: Code2,
            path: '/html'
        },
        {
            id: 2,
            name: 'CSS',
            icon: Code2,
            path: '/css'
        },
    ]

    return (
        <div className='p-5 dark:bg-slate-900 shadow-md bg-white h-screen z-50'>
            <Logo />
            <hr className='mt-7' />
            <div>
                {menu.map((item) => (
                    <Link key={item.id} href={item.path}>
                        <div className={`flex gap-3 mt-1 p-3 text-[18px] items-center cursor-pointer
                            hover:bg-primary
                            hover:bg-opacity-10
                            rounded-md
                            transition-all
                            duration-300
                            ease-in-out
                            group
                            ${path.startsWith(item.path) ? 'bg-teal-700 bg-opacity-50' : ''}
                            `}>
                            <item.icon size='24' className='group-hover:animate-bounce text-primary' />
                            <span className="dark:text-white">{item.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SideNavbar
