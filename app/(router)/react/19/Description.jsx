import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">19. Dynamic Routing</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini membahas konsep routing dinamis dalam React, memungkinkan Anda untuk menangani navigasi antara halaman-halaman aplikasi web dengan lebih fleksibel dan efisien. Anda akan belajar cara menggunakan library routing seperti React Router untuk menangani routing dinamis, termasuk pembuatan rute dinamis berdasarkan parameter URL. Dari konsep dasar hingga implementasi praktis, video ini memberikan wawasan yang mendalam tentang pengelolaan routing dinamis dalam pengembangan aplikasi web menggunakan React. Dengan contoh yang jelas dan panduan langkah-demi-langkah, Anda akan siap untuk mengimplementasikan routing dinamis dalam proyek React Anda, meningkatkan pengalaman pengguna dan keterbacaan kode Anda secara keseluruhan.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/3mEdAbbyKk0?si=MgxlqcM94HOprpDc"
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
