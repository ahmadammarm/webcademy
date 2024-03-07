import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">
      24. Pengkondisian : Switch 
      </h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video pembelajaran ini memfokuskan pada penggunaan struktur pengkondisian switch dalam bahasa pemrograman JavaScript. Anda akan dipandu untuk memahami cara menggunakan pernyataan switch untuk mengevaluasi ekspresi dan menjalankan blok kode yang sesuai dengan nilai ekspresi tersebut. Materi mencakup cara menulis switch statement, menentukan case untuk setiap kemungkinan nilai, serta penggunaan pernyataan break untuk menghentikan eksekusi setelah case yang sesuai ditemukan. Video ini memberikan contoh praktis dan penjelasan yang mudah dipahami, membantu Anda memahami konsep dan praktik penggunaan struktur pengkondisian switch dalam JavaScript. Cocok bagi pemula yang ingin mempelajari alternatif lain dalam penggunaan pengkondisian dalam JavaScript.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=4f4Cqr3NSRI&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=24"
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
