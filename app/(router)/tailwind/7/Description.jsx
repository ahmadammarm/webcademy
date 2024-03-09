import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">7. Transform, Transition, dan Animation</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, Anda akan mempelajari cara menggunakan transisi, animasi, dan transformasi dalam Tailwind CSS untuk menambahkan elemen interaktif dan dinamis pada desain web Anda. Kami akan menjelaskan konsep dasar dari masing-masing fitur, termasuk bagaimana Anda dapat mengontrol pergerakan, perubahan ukuran, dan perubahan tampilan elemen-elemen dengan menggunakan kelas-kelas Tailwind CSS yang sesuai. Dengan panduan praktis ini, Anda akan dapat meningkatkan pengalaman pengguna dan membuat desain web Anda lebih menarik dengan sentuhan interaktif yang dinamis. Mari jelajahi kreativitas Anda dalam menghidupkan desain web menggunakan Tailwind CSS!
      </p>
        <h2 className="mt-5 text-[20px] font-semibold">Sumber Video : <a href="https://www.youtube.com/watch?v=ELCr9MyRTH8&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=7" target="blank" className="
        text-blue-500
        hover:underline
        ">Klik Disini</a></h2>
    </div>
  );
}

export default Description;
