import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">13. Filter</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
        Dalam video ini, Anda akan diperkenalkan pada konsep filter di CSS3,
        yang memungkinkan Anda untuk menambahkan berbagai efek visual seperti
        blur, grayscale, saturate, dan lainnya pada elemen-elemen web Anda. Anda
        akan mempelajari cara menggunakan filter untuk meningkatkan estetika
        desain web Anda dengan mudah.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=ck5aAm1LK40&list=PLFIM0718LjIVCmrSWbZPKCccCkfFw-Naa&index=13"
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
