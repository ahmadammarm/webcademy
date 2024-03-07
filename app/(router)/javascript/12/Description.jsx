import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">
      12. Tipe Data : String
      </h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video pembelajaran ini memberikan pemahaman mendalam tentang tipe data string dalam bahasa pemrograman JavaScript. Anda akan diajak untuk memahami bagaimana string digunakan untuk merepresentasikan teks dalam kode JavaScript. Materi mencakup berbagai operasi yang dapat dilakukan pada string, seperti penggabungan (concatenation), penggantian karakter (replacement), pencarian substring, dan manipulasi lainnya. Selain itu, video ini juga menjelaskan tentang sifat string yang imut (immutable), yang berarti setelah string dibuat, ia tidak dapat diubah. Dengan penjelasan yang mudah dipahami dan contoh yang jelas, video ini cocok untuk pemula yang ingin memahami konsep dasar dan praktik penggunaan tipe data string dalam JavaScript.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=_XSeF00qNWE&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=12"
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
