import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">9. Accessibility</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini memberikan pemahaman dasar tentang pentingnya aksesibilitas web dalam HTML5. Anda akan belajar tentang prinsip-prinsip aksesibilitas dan praktik terbaik untuk membuat konten web yang dapat diakses dengan mudah oleh semua orang, termasuk mereka yang memiliki disabilitas. Kami akan mengeksplorasi penggunaan elemen HTML5, atribut, dan teknik styling untuk meningkatkan aksesibilitas, serta memberikan wawasan tentang alat bantu teknologi yang digunakan oleh pengguna dengan disabilitas. Dengan memahami aksesibilitas di HTML5, Anda dapat menciptakan pengalaman web yang inklusif dan dapat dijangkau oleh semua orang.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=qfn67VjdgZE&list=PLFIM0718LjIX-K5eeHRImnZhPUMhsw9A7&index=9"
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
