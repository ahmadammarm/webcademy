import React from 'react'
import { currentUser } from '@clerk/nextjs'

async function WelcomeBanner() {

  const user = await currentUser();

  return (
    <div className="flex gap-5 items-center bg-white dark:bg-slate-900 rounded-md p-5">
        <div>
          <h2 className="text-[30px] font-bold mb-4">Selamat Datang <span className="text-primary">{user.firstName} {user.lastName}</span></h2>
          <p>Mari Belajar Pemrograman Web di <span className="text-primary">Webcademy</span> Bersama Para Sepuh 😃😁</p>
        </div>
    </div>
  )
}

export default WelcomeBanner