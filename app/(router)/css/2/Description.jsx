import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">2. Border Radius</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
        Video ini akan memperkenalkan Anda pada properti border radius di CSS3,
        yang memungkinkan Anda untuk membentuk sudut-sudut elemen web dengan
        lebih kreatif. Anda akan mempelajari konsep dasar border radius serta
        cara menggunakannya untuk membuat elemen-elemen web Anda memiliki
        sudut-sudut melengkung atau bulat.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=3xbW5YHln78&list=PLFIM0718LjIVCmrSWbZPKCccCkfFw-Naa&index=2"
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
