import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">24. useReducer</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini membahas konsep penggunaan useReducer hook di React, alat yang kuat untuk mengelola state dengan lebih terstruktur dan efisien. Anda akan belajar cara menggunakan useReducer untuk mengelola perubahan state dengan pendekatan yang lebih deklaratif dan mengorganisir logika bisnis aplikasi Anda. Dari pengenalan dasar hingga penerapan praktis, video ini memberikan wawasan yang mendalam tentang penggunaan useReducer dalam pengembangan aplikasi web menggunakan React. Dengan contoh yang jelas dan panduan langkah-demi-langkah, Anda akan siap untuk mengoptimalkan manajemen state dalam proyek React Anda, meningkatkan keterbacaan dan skalabilitas kode Anda secara keseluruhan.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/2Kv0Gfm9QHY?si=HEWgn2oo4OZ2e6xF"
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
