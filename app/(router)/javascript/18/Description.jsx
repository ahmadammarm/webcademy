import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">
      18. Pengulangan : While
      </h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video pembelajaran ini secara mendalam membahas konsep pengulangan while dalam bahasa pemrograman JavaScript. Anda akan diajarkan cara menggunakan pernyataan while untuk melakukan iterasi atau pengulangan berulang hingga kondisi tertentu terpenuhi. Materi mencakup cara mengatur kondisi awal, mengatur kondisi penghentian, serta bagaimana menghindari terjebak dalam loop tak terbatas. Video ini memberikan contoh praktis dan skenario penggunaan pengulangan while untuk membantu Anda memahami konsep tersebut dengan jelas. Cocok bagi pemula yang ingin memperdalam pemahaman mereka tentang pengulangan dalam JavaScript menggunakan pernyataan while.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=4f4Cqr3NSRI&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=18"
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
