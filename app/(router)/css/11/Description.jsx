import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">11. Web Font Generator</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
        Dalam video ini, Anda akan diperkenalkan pada konsep dan penggunaan web
        font generator di CSS3, sebuah alat yang memungkinkan Anda untuk
        mengubah jenis huruf kustom menjadi format yang dapat digunakan secara
        langsung dalam desain web Anda. Anda akan belajar bagaimana menggunakan
        web font generator untuk mengkonversi jenis huruf kustom menjadi format
        yang didukung oleh browser web, sehingga Anda dapat memperluas pilihan
        jenis huruf Anda dan meningkatkan kreativitas dalam desain web Anda.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=ck5aAm1LK40&list=PLFIM0718LjIVCmrSWbZPKCccCkfFw-Naa&index=11"
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
