import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">22. Implementasi React Redux</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini membahas langkah-langkah implementasi Redux dalam aplikasi React, memberikan pandangan mendalam tentang bagaimana mengintegrasikan Redux untuk manajemen state yang efektif. Anda akan belajar cara mengonfigurasi Redux store, membuat action creators, reducers, dan menghubungkannya dengan komponen React menggunakan komponen khusus Redux. Dari konsep dasar hingga penerapan praktis, video ini memberikan wawasan yang jelas tentang cara mengimplementasikan Redux dalam pengembangan aplikasi web menggunakan React. Dengan contoh yang jelas dan panduan langkah-demi-langkah, Anda akan siap untuk mengintegrasikan Redux ke dalam proyek React Anda, meningkatkan pengelolaan state dan keterbacaan kode secara keseluruhan.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/OoEeZQ0ZQiE?si=6wy2D60_kF3lWpdc"
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
