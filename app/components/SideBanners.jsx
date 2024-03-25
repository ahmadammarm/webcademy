import React from 'react'
import Image from 'next/image'

function SideBanners() {
  return (
    <div>
        <h2 className="text-primary mb-[20px] text-2xl font-bold">Coming Soon</h2>
        <div>
            <Image src="/html/nextjs.png" alt="Belajar NextJs" width={500} height={300} className="rounded-md mb-5" />
        </div>
    </div>
  )
}

export default SideBanners