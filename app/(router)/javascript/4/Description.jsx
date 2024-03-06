import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">4. Compiler vs Interpreter</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini membahas perbedaan mendasar antara interpreter dan compiler dalam bahasa pemrograman JavaScript. Dengan memahami peran masing-masing, Anda akan dapat mengidentifikasi bagaimana kode JavaScript dieksekusi dan diolah oleh komputer. Dari proses interpretasi langsung hingga kompilasi sebelum pelaksanaan, video ini memberikan pemahaman yang jelas tentang bagaimana kedua metode ini memengaruhi kinerja dan pengembangan aplikasi JavaScript Anda.      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=gCBysZKiU3Y&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=4"
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
