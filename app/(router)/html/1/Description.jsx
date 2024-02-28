import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">Apa itu HTML5 ?</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video videoUrl="/video/html/1.mp4" />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
        Video ini merupakan panduan singkat yang memperkenalkan konsep dasar
        HTML5 kepada pemula. Mulai dari struktur dasar dokumen HTML,
        elemen-elemen penting seperti tag header, nav, section, dan footer,
        hingga fitur-fitur baru seperti canvas dan video, Anda akan diajak
        memahami bagaimana membangun situs web yang interaktif dengan HTML5.
        Dengan penjelasan yang mudah dipahami dan contoh langsung, video ini
        merupakan langkah awal yang sempurna untuk memulai perjalanan Anda dalam
        mempelajari bahasa pemrograman web yang fundamental ini.
      </p>
        <h2 className="mt-5 text-[20px] font-semibold">Sumber Video : <a href="https://www.youtube.com/watch?v=Q2VqCG13ejA&list=PLFIM0718LjIX-K5eeHRImnZhPUMhsw9A7" target="blank" className="
        text-blue-500
        hover:underline
        ">Klik Disini</a></h2>
    </div>
  );
}

export default Description;
