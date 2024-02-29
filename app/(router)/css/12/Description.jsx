import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">12. Vendor Prefix</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>
      {/* Video */}
      <Video />

      {/* Deskripsi */}
      <h2 className="mt-5 text-[20px] font-semibold">Tentang Video ini</h2>
      <p className="text-[14px] mt-5 italic">
        Dalam video ini, Anda akan mempelajari tentang vendor prefix di CSS3,
        yaitu awalan tertentu yang digunakan sebelum properti CSS untuk
        memastikan dukungan kompatibilitas antar browser. Anda akan diajarkan
        bagaimana menggunakan vendor prefix seperti -webkit-, -moz-, -ms-, dan
        -o- untuk menyesuaikan pengaturan properti CSS agar dapat diterapkan
        secara konsisten di berbagai browser.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Sumber Video :{" "}
        <a
          href="https://www.youtube.com/watch?v=ck5aAm1LK40&list=PLFIM0718LjIVCmrSWbZPKCccCkfFw-Naa&index=12"
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
