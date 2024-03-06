import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">3. Bahasa Pemrograman</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, kami membawa Anda ke dalam inti bahasa pemrograman JavaScript. Anda akan belajar tentang sintaks dasar JavaScript, seperti deklarasi variabel, tipe data, operator, dan struktur kontrol. Kami juga akan menjelaskan konsep-konsep penting seperti fungsi, objek, dan array, serta bagaimana Anda dapat menggunakannya dalam pembuatan aplikasi web yang dinamis. Bersiaplah untuk menjelajahi dunia JavaScript dan meningkatkan keterampilan pemrograman Anda melalui video ini!
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=dugL0oYx0w0&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=3"
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
