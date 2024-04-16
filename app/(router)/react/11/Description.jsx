import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">11. State</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, Anda akan mempelajari konsep krusial dalam pengembangan aplikasi web dengan React: event state. Video ini menguraikan bagaimana interaksi pengguna memicu perubahan dalam state aplikasi Anda, memungkinkan tampilan yang responsif dan dinamis. Dengan pemahaman yang mendalam tentang hubungan antara event handler dan state, Anda akan belajar cara mengelola dan memperbarui state aplikasi dengan tepat saat pengguna berinteraksi dengan komponen React. Melalui contoh yang jelas dan panduan langkah-demi-langkah, Anda akan dapat meningkatkan keahlian dalam mengelola event state, membantu Anda menghasilkan aplikasi web yang lebih interaktif dan responsif menggunakan React.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/6PcBnrr45XQ?si=aPTPNacoye5-qEGA"
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
