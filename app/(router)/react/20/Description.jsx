import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">20. Redux State Management</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini membahas peran Redux dalam pengelolaan state dalam aplikasi React, menyoroti konsep-konsep dasar Redux seperti store, action, dan reducer. Anda akan belajar bagaimana Redux membantu dalam menyimpan dan mengelola state secara terpusat, mempermudah pengembangan aplikasi yang lebih besar dan lebih kompleks. Dari pengenalan konsep hingga penerapan praktis, video ini memberikan wawasan yang mendalam tentang penggunaan Redux dalam pengembangan aplikasi web menggunakan React. Dengan contoh yang jelas dan panduan langkah-demi-langkah, Anda akan siap untuk mengintegrasikan Redux ke dalam proyek React Anda, meningkatkan skalabilitas dan keterbacaan kode Anda secara keseluruhan.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/jn89UKxa2do?si=eSDgqdx2o1ZshNXA"
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
