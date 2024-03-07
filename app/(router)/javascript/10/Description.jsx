import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">
      10. Operator : Aritmatika, Penugasan, dan Perbandingan
      </h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video pembelajaran ini mengulas tiga jenis operator utama dalam bahasa pemrograman JavaScript: aritmatika, penugasan, dan perbandingan. Anda akan mempelajari cara menggunakan operator aritmatika seperti penjumlahan, pengurangan, perkalian, dan pembagian untuk melakukan operasi matematika dasar. Selain itu, video ini juga membahas operator penugasan yang digunakan untuk memberikan nilai kepada variabel, serta operator perbandingan yang digunakan untuk membandingkan nilai antara dua variabel. Materi disajikan dengan penjelasan yang sederhana dan contoh yang jelas sehingga Anda dapat memahami konsep-konsep tersebut dengan lebih baik. Video ini cocok untuk pemula yang ingin memperluas pemahaman mereka tentang operator-operator dalam JavaScript.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=EnXClrVdpTM&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=10"
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
