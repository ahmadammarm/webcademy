import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">12. Functions dan Directives</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, Anda akan diajari tentang konsep Functions dan Directives dalam Tailwind CSS yang dapat membantu meningkatkan efisiensi pengembangan desain web Anda. Kami akan menjelaskan bagaimana Anda dapat menggunakan Functions untuk membuat pengaturan yang dapat disesuaikan secara dinamis, seperti menghasilkan skala warna dan mengatur ukuran font secara otomatis. Selain itu, kami akan membahas penggunaan Directives untuk mengatur kondisional dan menyesuaikan pengaturan berdasarkan konteks tertentu. Dengan memahami kedua konsep ini, Anda akan dapat mengoptimalkan penggunaan Tailwind CSS dalam proyek Anda, menghemat waktu, dan meningkatkan konsistensi dalam desain web Anda. Ayo mulai eksplorasi kemampuan Functions dan Directives dalam Tailwind CSS dalam video ini!
      </p>
        <h2 className="mt-5 text-[20px] font-semibold">Sumber Video : <a href="https://www.youtube.com/watch?v=ELCr9MyRTH8&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=12" target="blank" className="
        text-blue-500
        hover:underline
        ">Klik Disini</a></h2>
    </div>
  );
}

export default Description;
