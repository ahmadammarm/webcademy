import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">9. Rendering Lists</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, Anda akan dipandu melalui konsep penting dalam React: rendering lists. Anda akan belajar cara mengelola data dinamis dengan efisien menggunakan metode map() dan key props dalam React untuk membuat daftar yang responsif dan dinamis. Dari array data sederhana hingga data yang lebih kompleks, video ini akan membantu Anda memahami langkah-langkah praktis untuk mengintegrasikan dan menampilkan data dalam aplikasi React Anda dengan mudah dan efektif. Dengan contoh yang jelas dan panduan langkah-demi-langkah, Anda akan siap untuk menangani tugas-tugas yang melibatkan rendering list dalam pengembangan aplikasi web menggunakan React.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/1cojbMMR7ms?si=KBz2GfjAVJe3vuy2"
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
