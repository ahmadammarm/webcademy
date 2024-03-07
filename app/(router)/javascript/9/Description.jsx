import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">
      9. Tipe Data : Angka
      </h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video pembelajaran ini memberikan pengantar yang jelas tentang tipe data angka dalam bahasa pemrograman JavaScript. Anda akan memahami cara menyimpan dan memanipulasi angka dalam variabel. Materi meliputi konsep dasar seperti operasi aritmatika (penjumlahan, pengurangan, perkalian, pembagian), serta tipe data khusus seperti bilangan bulat (integer) dan bilangan desimal (float). Video ini disajikan dengan penjelasan yang mudah dipahami dan contoh praktis untuk membantu Anda memahami konsep-konsep tersebut dengan lebih baik. Cocok bagi pemula yang ingin memahami dasar-dasar tipe data angka dalam JavaScript.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=oPlEq7fewIg&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=9"
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
