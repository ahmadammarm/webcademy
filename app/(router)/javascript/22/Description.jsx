import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">
      22. Pengkondisian : Else If
      </h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video pembelajaran ini secara khusus membahas penggunaan struktur pengkondisian else if dalam bahasa pemrograman JavaScript. Anda akan diajari cara menangani lebih dari dua kondisi dengan menggunakan pernyataan else if setelah pernyataan if. Materi mencakup cara menulis multiple kondisi yang saling berturut-turut, sehingga kode dapat menjalankan blok perintah yang sesuai dengan kondisi yang terpenuhi. Video ini memberikan contoh konkret dan penjelasan yang mudah dipahami untuk membantu Anda memahami konsep dan penggunaan struktur pengkondisian else if secara efektif dalam JavaScript. Cocok bagi pemula yang ingin memperdalam pemahaman mereka tentang pengkondisian dalam pemrograman JavaScript.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=4f4Cqr3NSRI&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=22"
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
