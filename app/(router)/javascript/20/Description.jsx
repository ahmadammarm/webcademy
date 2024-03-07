import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">
      20. Pengulangan : For
      </h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video pembelajaran ini secara komprehensif menjelaskan penggunaan pengulangan for dalam bahasa pemrograman JavaScript. Anda akan diajari konsep dasar pengulangan for dan cara menggunakannya untuk melakukan iterasi atau pengulangan berulang melalui serangkaian instruksi. Materi mencakup cara menginisialisasi variabel, menentukan kondisi pengulangan, dan mengatur langkah iterasi. Selain itu, video ini juga memberikan contoh konkret dan aplikasi penggunaan pengulangan for dalam skenario pemrograman nyata. Dengan penjelasan yang mudah dipahami dan contoh yang diberikan, video ini sangat cocok bagi pemula yang ingin memahami konsep dan praktik penggunaan pengulangan for dalam JavaScript.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=4f4Cqr3NSRI&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=20"
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
