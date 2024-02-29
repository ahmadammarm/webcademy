import React from 'react'
import Image from 'next/image'

function SideBanners() {
  return (
    <div>
        <h2 className="text-primary mb-[20px] text-2xl font-bold">Coming Soon</h2>
        <div>
            <Image src="/html/banner-javascript.png" alt="Belajar React" width={500} height={300} className="rounded-md mb-5" />
            <Image src="/html/banner-tailwind.png" alt="Belajar React" width={500} height={300} className="rounded-md mb-5" />
            <Image src="/html/react.png" alt="Belajar React" width={500} height={300} className="rounded-md mb-5" />
        </div>
    </div>
  )
}

export default SideBanners