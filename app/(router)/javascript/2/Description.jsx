import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">2. Apa itu Pemrograman ?</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini merupakan pengantar yang memperkenalkan konsep dasar tentang apa itu pemrograman, khususnya dalam konteks bahasa pemrograman JavaScript. Anda akan memahami secara singkat konsep dasar pemrograman seperti algoritma, logika pemrograman, dan struktur data. Kami juga akan menjelaskan mengapa pemrograman penting dalam pengembangan perangkat lunak, serta bagaimana JavaScript dapat digunakan untuk menciptakan aplikasi web yang dinamis dan interaktif. Persiapkan diri Anda untuk memperluas pengetahuan tentang dunia pemrograman dengan video ini!
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=Ncrlg9kTC6U&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=2"
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
