import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">2. Kenapa Belajar Tailwind CSS ?</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, kami akan menjawab pertanyaan penting: Mengapa Anda harus belajar Tailwind CSS? Tailwind CSS bukanlah sekadar kerangka kerja CSS lainnya; ia mengubah paradigma desain web dengan pendekatan yang unik. Melalui pembahasan yang mudah dipahami, Anda akan memahami manfaat utama belajar Tailwind CSS, termasuk efisiensi dalam pengembangan, fleksibilitas dalam desain, konsistensi antarmuka, dan kemampuan untuk berkolaborasi secara efektif dalam tim. Bersiaplah untuk memahami mengapa Tailwind CSS menjadi pilihan utama bagi para pengembang web yang ingin meningkatkan produktivitas dan hasil desain mereka.
      </p>
        <h2 className="mt-5 text-[20px] font-semibold">Sumber Video : <a href="https://www.youtube.com/watch?v=ELCr9MyRTH8&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=2" target="blank" className="
        text-blue-500
        hover:underline
        ">Klik Disini</a></h2>
    </div>
  );
}

export default Description;
