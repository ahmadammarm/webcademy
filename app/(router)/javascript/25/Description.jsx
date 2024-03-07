import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">
      25. Pengulangan dan Pengkondisian Bersarang
      </h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video pembelajaran ini membahas tentang konsep pengulangan dan pengkondisian bersarang dalam bahasa pemrograman JavaScript. Anda akan diajari bagaimana menggabungkan struktur pengulangan (loop) dengan struktur pengkondisian (if, else if, else) untuk mengatur jalannya eksekusi program dengan lebih kompleks. Materi mencakup cara menggunakan loop bersarang, di mana satu atau lebih loop ditempatkan di dalam loop lainnya, serta bagaimana menentukan kondisi untuk setiap tingkat loop dan kondisi pengkondisian yang sesuai. Video ini memberikan contoh konkret dan penjelasan yang mudah dipahami, membantu Anda memahami konsep dan penerapan pengulangan dan pengkondisian bersarang dengan baik dalam JavaScript. Cocok bagi pemula yang ingin mempelajari cara mengatur alur eksekusi program yang lebih kompleks.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=4f4Cqr3NSRI&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=25"
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
