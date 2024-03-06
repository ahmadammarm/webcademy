import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">
      7. Lingkungan Pengembangan Javascript
      </h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini membahas tentang lingkungan pengembangan JavaScript, tempat di mana para pengembang menciptakan kode-kode magis mereka. Anda akan diajak untuk menjelajahi berbagai alat dan teknologi yang memungkinkan pengembangan aplikasi JavaScript yang efisien dan kuat. Dari editor kode hingga sistem manajemen paket, serta alat pengujian dan debugging, video ini memberikan gambaran lengkap tentang cara membangun lingkungan pengembangan yang optimal untuk proyek JavaScript Anda.  
              
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=h7zwbfS5CVU&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=7"
          target="blank"
          className="
        text-blue-500
        hover:underline
        "
        >
          Klik Disini
        </a>
      </h2>
    </div>
  );
}

export default Description;
