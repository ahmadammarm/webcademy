import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">9. Responsive Design</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, Anda akan diajari cara mengimplementasikan desain responsif menggunakan Tailwind CSS dengan mudah dan efisien. Kami akan membahas prinsip-prinsip dasar desain responsif, termasuk penggunaan grid system, fleksibilitas flexbox, dan teknik lainnya yang ditawarkan oleh Tailwind CSS. Anda akan belajar bagaimana membuat tata letak yang menyesuaikan diri dengan berbagai ukuran layar, mulai dari perangkat mobile hingga desktop, tanpa harus menulis banyak kode CSS tambahan. Dengan panduan praktis ini, Anda akan dapat menciptakan pengalaman pengguna yang optimal di berbagai perangkat dengan lebih cepat dan lebih mudah menggunakan Tailwind CSS. Ayo mulai membuat desain web Anda responsif dengan kelas ini!
      </p>
        <h2 className="mt-5 text-[20px] font-semibold">Sumber Video : <a href="https://www.youtube.com/watch?v=ELCr9MyRTH8&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=9" target="blank" className="
        text-blue-500
        hover:underline
        ">Klik Disini</a></h2>
    </div>
  );
}

export default Description;
