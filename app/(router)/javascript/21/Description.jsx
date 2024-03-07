import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">
      21. Pengkondisian : If Else
      </h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video pembelajaran ini memberikan pemahaman mendalam tentang penggunaan struktur pengkondisian if-else dalam bahasa pemrograman JavaScript. Anda akan dipandu langkah demi langkah dalam memahami cara membuat pernyataan kondisional, yang memungkinkan eksekusi kode berbeda berdasarkan kondisi yang diberikan. Materi mencakup cara menentukan kondisi, menulis blok kode untuk kondisi benar dan kondisi salah, serta memahami konsep else if untuk menangani beberapa kondisi secara bertingkat. Video ini disertai dengan contoh praktis dan penjelasan yang mudah dipahami, membantu Anda memahami konsep pengkondisian if-else dengan baik. Cocok bagi pemula yang ingin mempelajari dasar-dasar penggunaan struktur pengkondisian dalam JavaScript.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=4f4Cqr3NSRI&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=21"
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
