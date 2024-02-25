import React from 'react'
import Image from 'next/image'

function WelcomeBanner() {
  return (
    <div className="flex gap-5 items-center bg-white dark:bg-slate-900 rounded-md p-5">
        <Image src="/banner.png" width={100} height={100} />
        <div>
          <h2 className="text-[30px] font-bold">Selamat Datang di <span className="text-primary">Webcademy</span></h2>
          <p className="text-gray-500 dark:text-white">Platform belajar pemrograman web bersama Pa Dhika 😁😃</p>
        </div>
    </div>
  )
}

export default WelcomeBanner