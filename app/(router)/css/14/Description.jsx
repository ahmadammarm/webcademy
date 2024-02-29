import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">14. Transform</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
        Dalam video ini, Anda akan diajarkan tentang penggunaan transform di
        CSS3, sebuah fitur yang memungkinkan Anda untuk mengubah dan
        memanipulasi elemen-elemen web Anda dengan lebih kreatif. Anda akan
        belajar berbagai transformasi seperti rotasi, skalasi, translasi, dan
        skewing, serta bagaimana menerapkannya pada elemen-elemen web Anda.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=ck5aAm1LK40&list=PLFIM0718LjIVCmrSWbZPKCccCkfFw-Naa&index=14"
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
