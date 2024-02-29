import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">8. Linear Gradient</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
        Dalam video ini, Anda akan diajarkan konsep dasar linear gradient di
        CSS3, sebuah teknik yang memungkinkan Anda untuk menciptakan efek
        peralihan warna yang mulus pada elemen-elemen web Anda. Anda akan
        belajar bagaimana membuat gradient dari satu warna ke warna lain secara
        linear, serta berbagai opsi dan properti yang dapat disesuaikan, seperti
        arah, sudut, dan lokasi warna.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=ck5aAm1LK40&list=PLFIM0718LjIVCmrSWbZPKCccCkfFw-Naa&index=8"
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
