import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">1. Apa itu Tailwind CSS ?</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
      Dalam video ini, Anda akan mempelajari dasar-dasar Tailwind CSS, sebuah alat yang mengubah cara kita mendesain dan mengembangkan situs web. Tailwind CSS adalah kerangka kerja CSS yang memberikan pendekatan yang unik dalam membangun antarmuka pengguna. Daripada menggunakan prinsip-prinsip seperti "don't repeat yourself" (DRY) atau "convention over configuration" seperti kerangka kerja tradisional, Tailwind CSS memberikan kelas-kelas CSS kecil yang dapat digunakan langsung dalam HTML Anda. Dengan demikian, Anda memiliki lebih banyak kendali atas tata letak dan tampilan situs Anda. Bersiaplah untuk menjelajahi konsep-konsep dasar Tailwind CSS dan bagaimana Anda dapat memanfaatkannya untuk menghemat waktu dan upaya dalam mengembangkan desain web yang keren dan responsif.
      </p>
        <h2 className="mt-5 text-[20px] font-semibold">Sumber Video : <a href="https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h" target="blank" className="
        text-blue-500
        hover:underline
        ">Klik Disini</a></h2>
    </div>
  );
}

export default Description;
