import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">2. Apa itu Semantic HTML5 ?</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
        Video ini akan memperkenalkan Anda pada konsep dasar Semantic HTML5.
        Anda akan mempelajari bagaimana Semantic HTML5 membantu dalam membangun
        struktur yang jelas dan bermakna untuk halaman web Anda. Dari penggunaan
        elemen seperti header, footer, dan article, hingga pentingnya menentukan
        konten dengan benar untuk aksesibilitas dan SEO, video ini akan
        membimbing Anda melalui langkah-langkah praktis untuk memahami dan
        menerapkan Semantic HTML5 dalam proyek web Anda.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=o3m15BWi2HM&list=PLFIM0718LjIX-K5eeHRImnZhPUMhsw9A7&index=2"
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
