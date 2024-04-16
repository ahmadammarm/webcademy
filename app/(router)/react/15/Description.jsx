import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">15. useRef</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini mengulas penggunaan useRef hook di React, alat yang kuat untuk mengelola referensi ke elemen DOM dan komponen. Anda akan belajar cara menggunakan useRef untuk mengakses dan mengontrol elemen DOM, mengelola fokus, dan menyimpan data yang persisten antar render. Dari konsep dasar hingga penerapan praktis, video ini memberikan wawasan mendalam tentang penggunaan useRef dalam pengembangan aplikasi web menggunakan React. Dengan contoh yang jelas dan panduan yang mudah diikuti, Anda akan siap untuk memanfaatkan useRef secara efektif dalam proyek React Anda, meningkatkan fleksibilitas dan keterbacaan kode Anda.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/8JR_CTHDPbw?si=lKqE6ephUvvutGbQ"
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
