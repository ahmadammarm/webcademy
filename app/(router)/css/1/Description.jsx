import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">1. Intro</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
        Dalam video ini, Anda akan mempelajari dasar-dasar CSS3, yaitu salah
        satu bahasa pemrograman yang digunakan untuk mengatur tampilan dan
        format desain pada halaman web. Mulai dari konsep dasar hingga
        fitur-fitur terbaru, Anda akan dipandu melalui penjelasan yang jelas dan
        contoh praktis untuk mengembangkan pemahaman tentang cara menggunakan
        CSS3 untuk menciptakan desain web yang menarik dan responsif.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=Q2VqCG13ejA&list=PLFIM0718LjIX-K5eeHRImnZhPUMhsw9A7"
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
