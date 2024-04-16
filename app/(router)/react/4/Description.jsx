import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">4. Pengenalan Atomic Design</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, Anda akan diperkenalkan pada konsep Atomic Design, sebuah metode desain yang memungkinkan pengembangan aplikasi yang lebih modular, dapat diprediksi, dan mudah dipelihara dalam lingkungan React. Kami akan menjelaskan konsep-konsep dasar Atomic Design, seperti atom, molekul, organisme, template, dan halaman, serta bagaimana Anda dapat menerapkannya dalam pengembangan aplikasi React Anda. Dengan pemahaman yang mendalam tentang Atomic Design, Anda akan dapat membangun aplikasi web yang lebih efisien dan mudah dikembangkan menggunakan pendekatan desain modular ini dalam lingkungan React.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/FFx-wm8e0xY?si=aeI913HIDDzrvKky"
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
