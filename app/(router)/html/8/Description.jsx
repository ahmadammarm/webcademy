import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">8. Web Storage</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini memberikan gambaran tentang konsep dan penggunaan Web Storage dalam HTML5. Anda akan belajar tentang dua jenis Web Storage: localStorage dan sessionStorage. Dengan localStorage, Anda dapat menyimpan data di sisi klien secara permanen, sedangkan sessionStorage menyediakan tempat untuk menyimpan data sementara yang hanya berlaku selama sesi browser. Kami akan menjelaskan cara menggunakan API Web Storage untuk menyimpan, mengambil, dan menghapus data, serta memberikan contoh penggunaan praktis untuk meningkatkan pengalaman pengguna pada aplikasi web Anda.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=qfn67VjdgZE&list=PLFIM0718LjIX-K5eeHRImnZhPUMhsw9A7&index=8"
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
