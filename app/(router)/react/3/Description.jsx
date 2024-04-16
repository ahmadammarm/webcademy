import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">3. Component & Props</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, Anda akan diajak untuk memahami konsep dasar komponen dan properti (props) dalam React, yang merupakan fondasi utama dalam pengembangan aplikasi web dengan React. Kami akan membahas secara menyeluruh tentang apa itu komponen dan bagaimana cara membuat serta menggunakan komponen dalam proyek React Anda. Selain itu, Anda akan belajar tentang props, yaitu cara untuk meneruskan data dari satu komponen ke komponen lainnya. Dengan penjelasan yang jelas dan contoh yang mudah dipahami, Anda akan siap untuk membangun aplikasi web yang lebih dinamis dan modular menggunakan konsep komponen dan props dalam React!
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/JF9Zbxu8Mz0?si=fQjeYvmpeajDllVy"
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
