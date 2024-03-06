import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">
        5. Kenapa Belajar Javascript
      </h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
        Video ini mengungkapkan pentingnya mempelajari JavaScript dalam dunia
        pemrograman modern. Dari peran utamanya dalam pengembangan web hingga
        aplikasi seluler, JavaScript telah menjadi bahasa yang tak terhindarkan.
        Dengan memahami dasar-dasar JavaScript, Anda akan dapat menghasilkan
        interaksi dinamis pada situs web, membuat aplikasi web yang kuat, dan
        membangun karir yang sukses dalam pengembangan perangkat lunak. Saksikan
        video ini untuk memahami mengapa belajar JavaScript merupakan langkah
        penting bagi setiap pengembang.{" "}
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=6UhT1lmV9DE&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=5"
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
