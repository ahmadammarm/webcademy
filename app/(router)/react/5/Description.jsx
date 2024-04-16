import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">5. Implementasi Atomic Design</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, kita akan menjelajahi konsep Atomic Design dan bagaimana mengintegrasikannya dengan pengembangan React. Mulai dari pemahaman dasar tentang Atomic Design hingga implementasi praktisnya dalam proyek React, video ini akan memberikan panduan langkah demi langkah untuk memahami dan menerapkan prinsip-prinsip desain atomik. Anda akan belajar cara mengorganisir komponen React Anda secara hierarkis menggunakan atom, molekul, organisme, dan template. Dengan contoh nyata dan demonstrasi kode, Anda akan melangkah lebih jauh dalam mengoptimalkan struktur proyek React Anda dengan pendekatan desain yang modular dan mudah dipelihara. Jadi, siapkan kode editor Anda dan ikuti tutorial ini untuk menguasai implementasi Atomic Design dalam pengembangan aplikasi React Anda.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/FFx-wm8e0xY?si=42zZUNq57iJXA_G5"
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
