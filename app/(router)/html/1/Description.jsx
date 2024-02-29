import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">1. Apa itu HTML5 ?</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
        Video ini adalah pengantar yang komprehensif tentang HTML5, standar
        terbaru dalam bahasa markup untuk web. Anda akan diajak untuk memahami
        dasar-dasar HTML5, termasuk struktur dokumen, elemen baru, dan
        fungsionalitas yang ditingkatkan. Dari tag header dan footer hingga
        elemen audio dan video, Anda akan menjelajahi beragam fitur HTML5 serta
        manfaatnya dalam mengembangkan situs web modern yang responsif dan
        interaktif.
      </p>
        <h2 className="mt-5 text-[20px] font-semibold">Sumber Video : <a href="https://www.youtube.com/watch?v=Q2VqCG13ejA&list=PLFIM0718LjIX-K5eeHRImnZhPUMhsw9A7" target="blank" className="
        text-blue-500
        hover:underline
        ">Klik Disini</a></h2>
    </div>
  );
}

export default Description;
