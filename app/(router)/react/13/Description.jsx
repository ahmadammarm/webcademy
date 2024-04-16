import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">13. Lifecycle</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini membahas dengan rinci siklus hidup komponen di React, mulai dari tahap pembuatan hingga penghapusan. Anda akan belajar bagaimana komponen React berinteraksi dengan lingkungannya sepanjang siklus hidupnya, termasuk mounting, updating, dan unmounting. Dari konsep dasar hingga strategi pengoptimalan, video ini memberikan wawasan yang mendalam tentang cara mengelola siklus hidup komponen dengan tepat dalam pengembangan aplikasi web menggunakan React. Dengan contoh yang jelas dan penjelasan yang mendalam, Anda akan siap menghadapi berbagai tantangan dalam mengelola siklus hidup komponen React dalam proyek Anda.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/XuEnN8SBiy4?si=hvhJywOeKN2i8BDs"
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
