import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">5. Canvas</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini adalah panduan singkat yang mengenalkan Anda pada penggunaan elemen canvas dalam HTML5. Anda akan belajar bagaimana membuat area gambar dinamis di dalam halaman web Anda menggunakan JavaScript untuk menggambar bentuk, teks, serta melakukan manipulasi gambar secara interaktif. Dengan memahami dasar-dasar canvas, Anda dapat meningkatkan kemampuan pengembangan web Anda dan menciptakan pengalaman visual yang menarik bagi pengguna.      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=gRrM9TBnRYE&list=PLFIM0718LjIX-K5eeHRImnZhPUMhsw9A7&index=5"
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
