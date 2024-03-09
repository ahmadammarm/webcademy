import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">6. Pseudo Class dan Dark Mode</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, kami akan membahas konsep yang penting dalam Tailwind CSS, yaitu pseudo class dan dark mode. Kami akan menjelaskan bagaimana Anda dapat menggunakan pseudo class seperti hover, focus, dan active untuk menambahkan interaktivitas pada elemen-elemen dalam desain web Anda. Selain itu, kami akan memandu Anda melalui langkah-langkah untuk mengimplementasikan dark mode dalam proyek Anda dengan menggunakan fitur bawaan Tailwind CSS. Dengan pemahaman yang mendalam tentang kedua konsep ini, Anda akan dapat meningkatkan desain web Anda dengan sentuhan interaktif dan mode gelap yang elegan. 
      </p>
        <h2 className="mt-5 text-[20px] font-semibold">Sumber Video : <a href="https://www.youtube.com/watch?v=ELCr9MyRTH8&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=6" target="blank" className="
        text-blue-500
        hover:underline
        ">Klik Disini</a></h2>
    </div>
  );
}

export default Description;
