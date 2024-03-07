import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">
      19. Pengulangan : Tabel Penelusuran
      </h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video pembelajaran ini membahas cara menggunakan pengulangan untuk membuat tabel penelusuran (looping through tables) dalam pengembangan web dengan JavaScript. Anda akan diajarkan bagaimana mengakses elemen-elemen dalam tabel HTML dan mengulanginya menggunakan pernyataan pengulangan seperti for atau while. Materi mencakup cara menelusuri baris dan kolom dalam tabel, mengakses nilai sel, dan melakukan operasi tertentu pada data tabel. Video ini memberikan contoh praktis dan penjelasan yang mudah dipahami untuk membantu Anda memahami cara mengimplementasikan pengulangan tabel penelusuran dalam JavaScript dengan efektif. Cocok bagi mereka yang ingin mempelajari cara memanipulasi tabel HTML secara dinamis menggunakan JavaScript.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=4f4Cqr3NSRI&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=19"
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
