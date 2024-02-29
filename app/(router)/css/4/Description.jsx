import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">4. RGBa dan HSLa</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
        Dalam video ini, Anda akan dibimbing untuk memahami dua cara untuk
        menentukan warna dalam CSS3: menggunakan nilai rgba (red, green, blue,
        alpha) dan hsla (hue, saturation, lightness, alpha). Anda akan belajar
        perbedaan antara keduanya, serta bagaimana menggunakannya secara praktis
        dalam desain web.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=3xtGu46cyKo&list=PLFIM0718LjIVCmrSWbZPKCccCkfFw-Naa&index=4"
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
