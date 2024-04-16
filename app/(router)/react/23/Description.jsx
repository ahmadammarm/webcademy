import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">23. useContext</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini membahas konsep penggunaan useContext hook di React, yang memungkinkan Anda untuk mengakses state global tanpa perlu prop drilling. Anda akan belajar cara membuat dan menggunakan context dalam React untuk menyediakan data ke komponen-komponen di seluruh aplikasi dengan lebih mudah dan efisien. Dari konsep dasar hingga implementasi praktis, video ini memberikan wawasan mendalam tentang penggunaan useContext dalam pengembangan aplikasi web menggunakan React. Dengan contoh yang jelas dan panduan langkah-demi-langkah, Anda akan siap untuk mengimplementasikan useContext dalam proyek React Anda, meningkatkan efisiensi dan keterbacaan kode Anda secara keseluruhan.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/0jIW9VTmF14?si=dz3HnofIdIuWWWQo"
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
