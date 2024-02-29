import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">6. SVG</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini merupakan pengantar yang komprehensif tentang penggunaan SVG (Scalable Vector Graphics) dalam HTML5. Anda akan belajar bagaimana SVG memungkinkan pembuatan grafik vektor yang skalar, mempertahankan kualitas gambar meskipun diubah ukuran. Dengan menggunakan kode XML, Anda dapat membuat gambar, ikon, grafik, dan animasi dengan fleksibilitas dan kinerja yang tinggi. Pelajari dasar-dasar SVG dan bagaimana Anda dapat mengintegrasikannya ke dalam proyek HTML5 Anda untuk meningkatkan kualitas visual dan interaktif dari halaman web Anda.{" "}
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=qfn67VjdgZE&list=PLFIM0718LjIX-K5eeHRImnZhPUMhsw9A7&index=6"
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
