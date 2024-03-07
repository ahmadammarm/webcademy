import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">
      23. Latihan Pengkondisian
      </h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video pembelajaran ini menyajikan serangkaian latihan yang dirancang khusus untuk memperkuat pemahaman Anda tentang penggunaan pengkondisian dalam bahasa pemrograman JavaScript. Anda akan diberikan berbagai situasi atau skenario yang memerlukan penggunaan struktur pengkondisian seperti if, else if, dan else. Melalui latihan ini, Anda akan diberi kesempatan untuk mengimplementasikan konsep-konsep yang telah dipelajari dalam konteks pemrograman nyata. Latihan ini akan membantu Anda meningkatkan keterampilan Anda dalam membuat keputusan berdasarkan kondisi yang berbeda dalam kode JavaScript. Dengan latihan praktis dan petunjuk yang disediakan, video ini sangat cocok bagi pemula yang ingin menguji dan memperdalam pemahaman mereka tentang pengkondisian dalam JavaScript.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=4f4Cqr3NSRI&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=23"
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
