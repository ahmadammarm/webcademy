import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">4. Basic Utility Part 1</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, kami akan membahas dasar-dasar utilitas dalam Tailwind CSS, yang merupakan pondasi dari pendekatan yang unik dalam desain web. Anda akan belajar tentang kelas-kelas utilitas dasar seperti padding, margin, warna, tipografi, dan lain-lain, serta bagaimana Anda dapat menggunakannya langsung dalam HTML Anda untuk mengatur tampilan dan tata letak halaman web Anda. Dengan pemahaman yang kuat tentang basic utility ini, Anda akan dapat memanfaatkan Tailwind CSS untuk menghasilkan desain web yang konsisten, responsif, dan mudah disesuaikan dengan kebutuhan proyek Anda. Ayo mulai membangun fondasi desain yang kokoh dengan Tailwind CSS!
      </p>
        <h2 className="mt-5 text-[20px] font-semibold">Sumber Video : <a href="https://www.youtube.com/watch?v=ELCr9MyRTH8&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=4" target="blank" className="
        text-blue-500
        hover:underline
        ">Klik Disini</a></h2>
    </div>
  );
}

export default Description;
