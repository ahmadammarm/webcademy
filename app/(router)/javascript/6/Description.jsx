import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">
      6. Sejarah Javascript
      </h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini mengajak Anda untuk menjelajahi sejarah JavaScript, bahasa pemrograman yang mengubah wajah internet. Dari awalnya sebagai eksperimen di Netscape Navigator hingga menjadi bahasa pemrograman paling populer di dunia, Anda akan melihat bagaimana JavaScript telah berevolusi menjadi alat yang tak tergantikan dalam pengembangan web modern. Temukan asal-usulnya, penciptanya, dan peristiwa penting yang membentuk perjalanan panjang JavaScript hingga saat ini dalam video ini.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=G4LEU-NtQUg&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=6"
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
