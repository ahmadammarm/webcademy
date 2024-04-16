import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">16. Get Data API</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini membahas langkah-langkah praktis untuk mengambil data dari API menggunakan React, memungkinkan Anda untuk mengintegrasikan data eksternal ke dalam aplikasi web Anda. Anda akan belajar cara menggunakan fetch atau library HTTP seperti Axios untuk mengambil data dari berbagai sumber API. Dari menyiapkan permintaan hingga memproses respons, video ini memberikan wawasan yang mendalam tentang integrasi data API dalam pengembangan aplikasi web menggunakan React. Dengan contoh yang jelas dan panduan langkah-demi-langkah, Anda akan siap untuk memanfaatkan data API dalam proyek React Anda, meningkatkan fungsionalitas dan kegunaan aplikasi Anda.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/8JR_CTHDPbw?si=vZg5GEzsUagKn18g"
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
