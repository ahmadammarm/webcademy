import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">
      16. Popup Box pada Javascript
      </h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video pembelajaran ini membahas penggunaan popup box dalam pengembangan web dengan JavaScript. Anda akan diajarkan cara membuat dan mengontrol kotak dialog popup seperti alert, confirm, dan prompt. Materi mencakup cara menampilkan pesan kepada pengguna, menerima input dari pengguna, serta menangani respons yang diberikan. Video ini juga menjelaskan penggunaan popup box untuk memberikan informasi, meminta konfirmasi, atau mengumpulkan data dari pengguna secara interaktif. Dengan penjelasan yang jelas dan contoh yang disertakan, video ini sangat cocok bagi pemula yang ingin mempelajari cara menggunakan popup box dalam pengembangan web menggunakan JavaScript.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=4f4Cqr3NSRI&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=16"
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
