import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">21. Redux Toolkit</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini membahas penggunaan Redux Toolkit, sebuah toolkit resmi dari tim Redux, untuk mempermudah pengelolaan state dalam aplikasi React. Anda akan belajar bagaimana Redux Toolkit menyediakan abstraksi yang lebih tinggi atas konfigurasi Redux tradisional, mengurangi boilerplate code dan mempercepat proses pengembangan. Dari instalasi hingga implementasi praktis, video ini memberikan wawasan mendalam tentang penggunaan Redux Toolkit dalam pengembangan aplikasi web menggunakan React. Dengan contoh yang jelas dan panduan langkah-demi-langkah, Anda akan siap untuk meningkatkan efisiensi dan keterbacaan kode Anda dengan Redux Toolkit dalam proyek React Anda.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/OoEeZQ0ZQiE?si=1RdGPllbRtD2fPKs"
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
