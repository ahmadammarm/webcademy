import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">8. Layouting</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, Anda akan diajak untuk memahami konsep dasar tata letak dalam Tailwind CSS. Kami akan menjelaskan berbagai teknik untuk menciptakan tata letak yang responsif dan menarik menggunakan kelas-kelas Tailwind CSS. Mulai dari grid system hingga flexbox, Anda akan belajar bagaimana mengatur posisi, ukuran, dan susunan elemen-elemen dalam halaman web Anda dengan mudah. Dengan panduan praktis ini, Anda akan dapat meningkatkan keterampilan dalam mengelola tata letak dan merancang desain web yang sesuai dengan kebutuhan proyek Anda. Ayo mulai eksplorasi Anda dalam menciptakan tata letak yang menakjubkan dengan Tailwind CSS!
      </p>
        <h2 className="mt-5 text-[20px] font-semibold">Sumber Video : <a href="https://www.youtube.com/watch?v=ELCr9MyRTH8&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=8" target="blank" className="
        text-blue-500
        hover:underline
        ">Klik Disini</a></h2>
    </div>
  );
}

export default Description;
