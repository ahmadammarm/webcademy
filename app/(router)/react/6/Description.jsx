import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">6. React Router</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, kita akan menggali lebih dalam tentang penggunaan React Router untuk mengelola navigasi dalam aplikasi web React. Mulai dari konsep dasar hingga teknik lanjutan, Anda akan belajar bagaimana menggunakan React Router untuk membuat navigasi yang dinamis dan responsif. Video ini akan membahas instalasi, konfigurasi, dan penggunaan berbagai fitur React Router seperti Route, Link, Redirect, dan Switch. Anda akan diperkenalkan dengan strategi penanganan navigasi, termasuk navigasi berbasis URL, redirect, dan nested routing. Dengan contoh praktis dan penjelasan yang jelas, Anda akan siap untuk mengimplementasikan React Router dalam proyek React Anda dan meningkatkan pengalaman pengguna dengan navigasi yang mulus. Jadi, bersiaplah untuk memperdalam pemahaman Anda tentang navigasi web dengan React Router dalam video ini.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/SYJpUJmYBRk?si=PILnTbaY_WJp4QNT"
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
