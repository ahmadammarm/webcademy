import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">8. Nested Component</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, Anda akan belajar tentang konsep nested component di React dan bagaimana mengimplementasikannya dalam pengembangan aplikasi web. Mulai dari pemahaman dasar tentang komponen hingga strategi efektif dalam menyusun hierarki komponen yang terstruktur, video ini akan membantu Anda memahami cara memanfaatkan potensi penuh dari nested component untuk meningkatkan kualitas dan keterbacaan kode React Anda. Dengan contoh yang jelas dan langkah-langkah praktis, Anda akan siap menghadapi kompleksitas pengembangan aplikasi web dengan lebih percaya diri menggunakan nested component di React.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/1cojbMMR7ms?si=Pobt5HjMtL_W0xTF"
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
