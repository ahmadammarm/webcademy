import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">18. Custom Hooks</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini membahas konsep custom hooks dalam React, alat yang memungkinkan Anda untuk mengekstraksi logika yang digunakan secara berulang dalam komponen-komponen Anda menjadi hook yang dapat digunakan kembali. Anda akan belajar bagaimana membuat dan menggunakan custom hooks untuk mengisolasi logika yang kompleks, mengurangi duplikasi kode, dan meningkatkan keterbacaan kode Anda secara keseluruhan. Dari konsep dasar hingga penerapan praktis, video ini memberikan wawasan yang mendalam tentang penggunaan custom hooks dalam pengembangan aplikasi web menggunakan React. Dengan contoh yang jelas dan panduan yang mudah diikuti, Anda akan siap untuk menciptakan dan mengintegrasikan custom hooks ke dalam proyek React Anda, meningkatkan efisiensi dan konsistensi kode Anda.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/ajNKk9sIVFY?si=pwiV3_hzLZ3UGFyI"
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
