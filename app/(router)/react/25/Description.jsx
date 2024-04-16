import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">25. Review Materi</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Avip Syaifulloh</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Video ini bertujuan untuk memberikan pemantapan dan pembaruan konsep kunci dalam pengembangan aplikasi web dengan React. Mulai dari konsep dasar seperti komponen, state, dan props, hingga konsep lanjutan seperti pengelolaan state dengan Redux atau useContext, video ini menyajikan rangkuman menyeluruh yang membantu memperkuat pemahaman Anda tentang React. Dengan menghadirkan ulasan singkat dan penekanan pada poin-poin penting, video ini membantu Anda memastikan bahwa Anda memiliki dasar yang kuat dan siap untuk mengambil langkah berikutnya dalam perjalanan pengembangan aplikasi web menggunakan React.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://youtu.be/vwg9VTDPG78?si=vIbWM4Viu-90JiBN"
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
