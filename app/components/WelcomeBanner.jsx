import React from 'react'
import Image from 'next/image'
import { currentUser } from '@clerk/nextjs'

async function WelcomeBanner() {

  const user = await currentUser();

  return (
    <div className="flex gap-5 items-center bg-white dark:bg-slate-900 rounded-md p-5">
        <Image src="/banner.png" width={100} height={100} />
        <div>
          <h2 className="lg:text-[30px] font-bold md:text-2xl mb-4">Selamat Datang di Webcademy</h2>
          <h2 className="lg:text-[30px] font-bold text-primary md:text-lg">{user.firstName} {user.lastName}</h2>
        </div>
    </div>
  )
}

export default WelcomeBanner