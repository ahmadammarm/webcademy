import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">3. Images Elements</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini menyajikan pengenalan lengkap tentang elemen gambar (image element) di HTML5. Anda akan belajar cara menggunakan tag img untuk menyisipkan gambar ke dalam halaman web Anda. Mulai dari atribut penting seperti src untuk menentukan lokasi gambar, hingga alt untuk deskripsi alternatif, video ini akan memberikan pemahaman mendalam tentang penggunaan yang tepat dan praktik terbaik untuk memperkaya konten visual dalam pengembangan web menggunakan HTML5.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=9g1Zz83FXyc&list=PLFIM0718LjIX-K5eeHRImnZhPUMhsw9A7&index=3"
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
