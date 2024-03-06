import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">1. Intro</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
        Video ini merupakan pengantar yang membawa Anda ke dalam dunia bahasa
        pemrograman JavaScript. Dalam video ini, Anda akan mempelajari sejarah
        singkat JavaScript, kegunaan utamanya, serta mengapa JavaScript menjadi
        bahasa pemrograman yang penting dalam pengembangan web modern. Kami juga
        akan membahas beberapa konsep dasar JavaScript seperti variabel, tipe
        data, dan struktur kontrol, yang akan memberi Anda landasan yang kuat
        untuk memahami lebih lanjut tentang bahasa ini. Siapkan diri Anda untuk
        memulai perjalanan mengasyikkan dalam belajar bahasa pemrograman
        JavaScript!
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=RUTV_5m4VeI&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=1"
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
