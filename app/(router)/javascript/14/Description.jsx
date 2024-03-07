import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">
      14. Variable
      </h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video pembelajaran ini secara terperinci membahas tentang penggunaan variabel dalam bahasa pemrograman JavaScript. Anda akan belajar bagaimana menggunakan variabel untuk menyimpan nilai dan data di dalam kode. Materi mencakup cara mendefinisikan variabel, menetapkan nilai ke dalamnya, dan menggunakan variabel dalam berbagai operasi. Selain itu, video ini juga membahas tentang tipe data variabel seperti string, number, boolean, dan objek dalam konteks JavaScript. Dengan penjelasan yang mudah dipahami dan contoh yang jelas, video ini sangat cocok bagi pemula yang ingin memahami dasar-dasar penggunaan variabel dalam JavaScript.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=_XSeF00qNWE&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=14"
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
