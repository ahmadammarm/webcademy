import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">17. Post Data API</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini membahas langkah-langkah praktis untuk mengirim data ke API menggunakan React, memungkinkan Anda untuk menyimpan data pengguna ke server atau membuat pembaruan ke database eksternal. Anda akan belajar cara menggunakan metode POST untuk mengirim data formulir atau data JSON ke endpoint API. Dari menyiapkan permintaan hingga menangani respons, video ini memberikan wawasan yang mendalam tentang pengiriman data ke server dalam pengembangan aplikasi web menggunakan React. Dengan contoh yang jelas dan panduan langkah-demi-langkah, Anda akan siap untuk mengimplementasikan fitur pengiriman data ke API dalam proyek React Anda dengan percaya diri.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/KkbtrogWeIw?si=ZghoqG5HSzz14-7A"
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
