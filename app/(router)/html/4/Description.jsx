import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">4. Audio dan Video</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini menghadirkan panduan praktis tentang penggunaan elemen audio dan video di HTML5. Anda akan belajar cara menyisipkan dan mengontrol file audio dan video langsung dalam halaman web Anda menggunakan tag audio dan video. Dari atribut seperti src untuk menentukan sumber media hingga opsi pengontrolan seperti autoplay dan controls, video ini akan membimbing Anda melalui langkah-langkah praktis untuk menyajikan konten multimedia dengan mudah dan efektif dalam pengembangan web menggunakan HTML5.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=SQMruNuafHk&list=PLFIM0718LjIX-K5eeHRImnZhPUMhsw9A7&index=4"
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
