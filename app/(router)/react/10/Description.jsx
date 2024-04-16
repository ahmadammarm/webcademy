import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">10. Event Handler</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, Anda akan diajak untuk menjelajahi konsep penting dalam React: event handler. Anda akan belajar cara menangani berbagai jenis interaksi pengguna, seperti klik tombol, input teks, atau perubahan status, dengan menggunakan event handler di React. Mulai dari dasar-dasar penanganan event hingga strategi yang lebih canggih untuk mengelola kejadian kompleks, video ini akan memberikan wawasan yang mendalam serta contoh yang jelas untuk membantu Anda menguasai kemampuan menangani event dalam pengembangan aplikasi web menggunakan React. Dengan pemahaman yang kuat tentang event handler, Anda akan dapat menciptakan pengalaman pengguna yang interaktif dan responsif dengan lebih percaya diri dalam proyek React Anda.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/6PcBnrr45XQ?si=bpPPif-P-ducDbGV"
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
