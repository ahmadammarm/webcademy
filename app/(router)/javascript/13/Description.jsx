import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">
      13. Tipe Data : Boolean
      </h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video pembelajaran ini secara komprehensif menjelaskan tentang tipe data boolean dalam bahasa pemrograman JavaScript. Anda akan memahami esensi dari tipe data ini yang digunakan untuk menyatakan nilai kebenaran, seperti true atau false, dalam pemrograman. Materi mencakup cara mendefinisikan variabel boolean, penggunaan operator perbandingan untuk menghasilkan nilai boolean.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=_XSeF00qNWE&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=13"
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
