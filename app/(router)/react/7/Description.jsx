import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">7. Conditional Rendering</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, kita akan mengulas beragam teknik conditional rendering dalam pengembangan aplikasi React. Mulai dari penerapan dasar menggunakan if statements hingga pendekatan yang lebih canggih dengan menggunakan operator ternary, logical &&, dan metode map(), video ini akan memberikan pemahaman yang mendalam tentang bagaimana melakukan rendering berdasarkan kondisi tertentu dalam komponen React. Anda akan belajar bagaimana menangani logika kondisional untuk menampilkan atau menyembunyikan elemen berdasarkan keadaan aplikasi, seperti autentikasi pengguna, status data, atau input pengguna. Dengan demonstrasi praktis dan contoh kode yang jelas, Anda akan dapat mengimplementasikan conditional rendering secara efektif dalam proyek React Anda untuk meningkatkan fleksibilitas dan responsivitas aplikasi Anda. Jadi, mari kita jelajahi dunia conditional rendering dalam React bersama-sama dalam video ini.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/_kGqT8MaYRQ?si=RQj2_9v01Tumwr9M"
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
