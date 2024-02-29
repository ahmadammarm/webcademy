import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">17. Animation</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
        Dalam video ini, Anda akan diajarkan konsep dasar tentang penggunaan
        animation di CSS3, yang memungkinkan Anda untuk membuat gerakan dan efek
        visual yang dinamis pada elemen-elemen web Anda. Anda akan belajar cara
        membuat animasi menggunakan keyframes, mengontrol durasi, iterasi, dan
        jenis easing untuk menciptakan efek animasi yang sesuai dengan kebutuhan
        desain Anda.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=ck5aAm1LK40&list=PLFIM0718LjIVCmrSWbZPKCccCkfFw-Naa&index=17"
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
