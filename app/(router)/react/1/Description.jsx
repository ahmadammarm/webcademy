import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">1. Pengenalan React</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video pembelajaran ini, Anda akan diajak untuk memahami secara mendalam tentang React, salah satu library JavaScript yang paling populer dalam pengembangan aplikasi web modern, mulai dari konsep dasar hingga praktiknya dalam membangun aplikasi web interaktif, melalui penjelasan tentang pentingnya React dalam pengembangan web, panduan langkah demi langkah dalam menyiapkan lingkungan pengembangan React, pemahaman yang komprehensif tentang konsep-konsep mendasar seperti komponen, properti, dan state dalam React, serta penerapan praktisnya dalam membuat aplikasi web sederhana, memungkinkan Anda untuk memulai perjalanan pengembangan aplikasi web yang dinamis dan responsif dengan percaya diri menggunakan React.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=rNSfMxMPWqc&list=PLmF_zPV9ZcP346sttD4Vs2VROLlIp5kPz&index=1"
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
