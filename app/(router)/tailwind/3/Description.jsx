import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">3. Instalasi dan Konfigurasi</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, Anda akan dipandu melalui proses instalasi dan konfigurasi Tailwind CSS dengan langkah-langkah yang mudah dipahami. Kami akan memulai dengan menjelaskan langkah-langkah awal untuk menginstal Tailwind CSS melalui npm atau menggunakan manajer paket favorit Anda. Setelah itu, kami akan menunjukkan bagaimana mengonfigurasi Tailwind CSS agar sesuai dengan kebutuhan proyek Anda, mulai dari menyesuaikan warna hingga menambahkan plugin dan variant khusus. Dengan panduan praktis ini, Anda akan siap untuk mulai memanfaatkan kekuatan Tailwind CSS dalam mengembangkan tata letak web yang responsif dan menarik.
      </p>
        <h2 className="mt-5 text-[20px] font-semibold">Sumber Video : <a href="https://www.youtube.com/watch?v=ELCr9MyRTH8&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=3" target="blank" className="
        text-blue-500
        hover:underline
        ">Klik Disini</a></h2>
    </div>
  );
}

export default Description;
