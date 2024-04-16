import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">12. useState</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini membahas penggunaan useState hook di React, alat yang kuat untuk mengelola state dalam komponen fungsional. Anda akan mempelajari cara menggunakan useState untuk membuat komponen yang responsif dan dinamis dengan menyimpan dan memperbarui data state. Dari konsep dasar hingga penerapan praktis, video ini memberikan wawasan yang mendalam tentang penggunaan useState dalam pengembangan aplikasi web menggunakan React. Dengan contoh yang jelas dan panduan yang mudah diikuti, Anda akan siap untuk memanfaatkan useState secara efektif dalam proyek React Anda, meningkatkan kualitas dan keterbacaan kode Anda.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/qHQv_cRmJiQ?si=PF6WlEKWskhKRWdv"
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
