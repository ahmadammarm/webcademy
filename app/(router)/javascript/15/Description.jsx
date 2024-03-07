import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">
      15. Menulis Javascript
      </h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video pembelajaran ini membimbing Anda langkah demi langkah dalam menulis kode JavaScript. Anda akan belajar tentang sintaks dasar JavaScript, termasuk cara mendefinisikan variabel, menulis pernyataan kondisional, membuat perulangan, dan menggunakan fungsi. Video ini juga memberikan wawasan tentang konsep dasar pemrograman, seperti logika algoritma dan pemecahan masalah. Dengan penjelasan yang jelas dan contoh yang diberikan, video ini sangat cocok bagi pemula yang ingin memulai perjalanan mereka dalam mempelajari bahasa pemrograman JavaScript.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=_XSeF00qNWE&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=15"
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
