import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">
      8. Nilai dan Tipe Data pada Javascript
      </h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video pembelajaran ini membahas dasar-dasar nilai dan tipe data dalam bahasa pemrograman JavaScript. Anda akan mempelajari cara menyimpan informasi dalam variabel, termasuk angka, teks, dan kebenaran (boolean). Selain itu, video ini menjelaskan tentang tipe data primitif seperti string, number, dan boolean, serta konsep objek dalam JavaScript. Dengan penjelasan yang mudah dipahami dan contoh yang jelas, video ini cocok untuk pemula yang ingin memahami konsep dasar JavaScript dengan lebih baik.              
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=1FAnrYu7LCM&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=8"
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
