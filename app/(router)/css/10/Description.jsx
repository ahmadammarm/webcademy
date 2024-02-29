import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">10. Font Face</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
        Dalam video ini, Anda akan diajarkan tentang penggunaan @font-face di
        CSS3, sebuah fitur yang memungkinkan Anda untuk menggunakan jenis huruf
        kustom dalam desain web Anda. Anda akan belajar cara menyematkan jenis
        huruf yang tidak umum atau kustom ke dalam halaman web Anda menggunakan
        @font-face, memberikan fleksibilitas dan kreativitas dalam pemilihan
        jenis huruf.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=ck5aAm1LK40&list=PLFIM0718LjIVCmrSWbZPKCccCkfFw-Naa&index=10"
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
