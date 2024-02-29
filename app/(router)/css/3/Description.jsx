import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">3. Opacity</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
        Dalam video ini, Anda akan diajarkan konsep opacity di CSS3, yang
        memungkinkan Anda untuk mengontrol tingkat ketransparanan elemen-elemen
        web Anda. Anda akan belajar cara menggunakan properti opacity untuk
        membuat elemen-elemen menjadi lebih transparan, sehingga memberikan efek
        visual menarik seperti overlay, efek fade-in dan fade-out, serta
        blending yang halus antara elemen-elemen yang tumpang tindih.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=i9uw6ajdNwI&list=PLFIM0718LjIVCmrSWbZPKCccCkfFw-Naa&index=3"
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
