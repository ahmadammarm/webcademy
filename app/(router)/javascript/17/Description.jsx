import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">
      17. Control Flow pada Javascript
      </h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video pembelajaran ini menjelaskan konsep dasar tentang alur kontrol (control flow) dalam bahasa pemrograman JavaScript. Anda akan diajarkan bagaimana struktur kendali seperti pernyataan if, else if, dan else digunakan untuk mengatur jalannya eksekusi program berdasarkan kondisi tertentu. Materi juga mencakup penggunaan pernyataan switch untuk menangani multiple conditions. Selain itu, Anda akan mempelajari tentang penggunaan loop seperti for, while, dan do-while untuk melakukan tugas berulang secara efisien. Video ini disertai dengan contoh yang jelas untuk membantu Anda memahami konsep alur kontrol dengan baik. Cocok untuk pemula yang ingin memahami dasar-dasar struktur kendali dalam JavaScript.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=4f4Cqr3NSRI&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=17"
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
