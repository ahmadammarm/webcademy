import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">11. Grid</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, kami akan membahas konsep dasar dan penggunaan grid dalam Tailwind CSS. Anda akan diajak untuk memahami cara menggunakan kelas-kelas Tailwind CSS untuk membuat tata letak grid yang responsif dan menarik dalam desain web Anda. Kami akan menjelaskan cara mengatur grid container, menentukan jumlah kolom, mengatur jarak antar elemen, dan banyak lagi dengan menggunakan fitur grid Tailwind CSS. Dengan panduan praktis ini, Anda akan dapat meningkatkan keterampilan dalam mengatur tata letak halaman web Anda dengan lebih efisien dan mudah menggunakan grid system dari Tailwind CSS. Ayo mulai menjelajahi kemampuan grid dalam Tailwind CSS dalam video ini!
      </p>
        <h2 className="mt-5 text-[20px] font-semibold">Sumber Video : <a href="https://www.youtube.com/watch?v=ELCr9MyRTH8&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=11" target="blank" className="
        text-blue-500
        hover:underline
        ">Klik Disini</a></h2>
    </div>
  );
}

export default Description;
