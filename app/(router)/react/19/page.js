import React from 'react'
import Description from './Description'
import NextPart from './NextPart'

function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-5">
      {/* Judul dan Deskripsi Video */}
      <div className="col-span-2 bg-white dark:bg-slate-900 p-3 rounded-md">
        <Description />
      </div>
      {/* List Semua Video */}
      <div>
        <NextPart />
      </div>
    </div>
  )
}

export default page