import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">5. Box Shadow Part 1</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
        Dalam video ini, Anda akan diperkenalkan pada properti box shadow di
        CSS3, yang memungkinkan Anda untuk menambahkan dimensi dan kedalaman
        pada elemen-elemen web Anda dengan efek bayangan yang menarik. Anda akan
        belajar konsep dasar box shadow dan bagaimana menggunakannya untuk
        membuat elemen-elemen web Anda terlihat lebih menonjol dan realistis.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=RBUHmAL2-os&list=PLFIM0718LjIVCmrSWbZPKCccCkfFw-Naa&index=5"
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
