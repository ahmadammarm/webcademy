import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">2. Setup Project</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, Anda akan dipandu langkah demi langkah dalam menyiapkan proyek React dari awal, mulai dari pengaturan lingkungan pengembangan hingga membuat proyek React yang siap digunakan. Anda akan belajar cara menginstal perangkat lunak yang diperlukan, mengonfigurasi proyek React menggunakan Create Vite, dan memahami struktur dasar proyek React. Dengan panduan praktis ini, Anda akan dapat memulai pengembangan proyek React Anda dengan cepat dan mudah!
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/QbmrYAq-YqE?si=mIzkyM4wKkJ-zDHV"
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
