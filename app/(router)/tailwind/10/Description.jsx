import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">10. Flexbox</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, Anda akan dipandu melalui konsep dasar dan penggunaan Flexbox dalam Tailwind CSS. Kami akan menjelaskan bagaimana Anda dapat menggunakan kelas-kelas Tailwind CSS untuk membuat tata letak yang fleksibel dan responsif tanpa harus menulis banyak kode CSS tambahan. Anda akan belajar tentang properti-properti Flexbox seperti justify-content, align-items, dan flex-wrap, serta bagaimana mengaplikasikannya dalam desain web Anda. Dengan panduan praktis ini, Anda akan dapat meningkatkan keterampilan dalam mengatur tata letak elemen-elemen dalam halaman web Anda dengan lebih efisien dan mudah menggunakan fitur Flexbox dari Tailwind CSS. Ayo jelajahi kemampuan flexbox dalam Tailwind CSS dalam video ini!
      </p>
        <h2 className="mt-5 text-[20px] font-semibold">Sumber Video : <a href="https://www.youtube.com/watch?v=ELCr9MyRTH8&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=10" target="blank" className="
        text-blue-500
        hover:underline
        ">Klik Disini</a></h2>
    </div>
  );
}

export default Description;
