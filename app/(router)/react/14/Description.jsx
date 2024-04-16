import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">14. useEffect</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini membahas pentingnya useEffect hook di React untuk menangani efek samping dan sinkronisasi dengan lingkungan eksternal. Anda akan mempelajari cara menggunakan useEffect untuk melakukan tindakan yang diperlukan setelah render komponen, seperti pengambilan data dari server, langganan, dan pemutaran efek animasi. Dari penggunaan dasar hingga pola yang lebih canggih, video ini memberikan pemahaman yang mendalam tentang bagaimana menggunakan useEffect dengan efektif dalam pengembangan aplikasi web menggunakan React. Dengan contoh yang jelas dan panduan praktis, Anda akan siap untuk mengintegrasikan useEffect ke dalam proyek React Anda dengan percaya diri, meningkatkan kualitas dan responsivitas aplikasi Anda.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/BE2uTuGGL0Y?si=9wTr-GHsjojjiKVf"
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
