import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">
      11. Operator : Logika, String, Typeof, dan Kondisional
      </h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video pembelajaran ini mengulas konsep-konsep operator logika, manipulasi string, penggunaan operator typeof, dan struktur kondisional dalam bahasa pemrograman JavaScript. Anda akan belajar cara menggunakan operator logika seperti && (AND), || (OR), dan ! (NOT) untuk membuat keputusan berdasarkan kondisi tertentu. Selain itu, video ini menjelaskan cara memanipulasi teks menggunakan operator string, seperti penggabungan string dan ekstraksi substring. Anda juga akan memahami penggunaan operator typeof untuk mengidentifikasi tipe data variabel. Selanjutnya, video ini membahas struktur kondisional seperti if-else dan switch-case yang memungkinkan Anda membuat keputusan dalam kode berdasarkan kondisi tertentu. Dengan penjelasan yang mudah dipahami dan contoh yang jelas, video ini cocok untuk pemula yang ingin memahami konsep operator logika, string, typeof, dan kondisional dalam JavaScript.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=_XSeF00qNWE&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=11"
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
