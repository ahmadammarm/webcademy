import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">7. Form Validation</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini menyajikan konsep dan teknik dasar untuk validasi formulir di HTML5. Anda akan mempelajari cara menggunakan atribut dan elemen HTML5, seperti required, pattern, dan input types, untuk menerapkan validasi langsung di sisi klien. Kami juga akan menjelaskan penggunaan JavaScript untuk validasi formulir yang lebih kompleks dan interaktif. Dengan memahami validasi formulir di HTML5, Anda dapat meningkatkan pengalaman pengguna dengan memastikan data yang dikirimkan ke server adalah valid dan sesuai dengan persyaratan yang ditetapkan.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=qfn67VjdgZE&list=PLFIM0718LjIX-K5eeHRImnZhPUMhsw9A7&index=7"
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
