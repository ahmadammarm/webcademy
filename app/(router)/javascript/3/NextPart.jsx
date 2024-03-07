"use client";

import React, { useState } from "react";

function NextPart() {
  const [activePage, setActivePage] = useState(3);

  const handleClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <div className="p-5 text-center rounded-sm bg-white dark:bg-slate-900">
      <h2 className="text-[20px] font-bold">Belajar Javascript</h2>
      <div className="flex flex-col gap-5 mt-5">
        <a
          href="/javascript/1"
          className={`block border rounded-md p-3 ${
            activePage === 1 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(1)}
        >
          1. Intro
        </a>
        <a
          href="/javascript/2"
          className={`block border rounded-md p-3 ${
            activePage === 2 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(2)}
        >
          2. Apa itu Pemrograman ?
        </a>
        <a
          href="/javascript/3"
          className={`block border rounded-md p-3 ${
            activePage === 3 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(3)}
        >
          3. Bahasa Pemrograman
        </a>
        <a
          href="/javascript/4"
          className={`block border rounded-md p-3 ${
            activePage === 4 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(4)}
        >
          4. Compiler vs Interpreter
        </a>
        <a
          href="/javascript/5"
          className={`block border rounded-md p-3 ${
            activePage === 5 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(5)}
        >
          5. Kenapa Belajar Javascript
        </a>
        <a
          href="/javascript/6"
          className={`block border rounded-md p-3 ${
            activePage === 6 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(6)}
        >
          6. Sejarah Javascript
        </a>
        <a
          href="/javascript/7"
          className={`block border rounded-md p-3 ${
            activePage === 7 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(7)}
        >
          7. Lingkungan Pengembangan Javascript
        </a>
        <a
          href="/javascript/8"
          className={`block border rounded-md p-3 ${
            activePage === 8 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(8)}
        >
          8. Nilai dan Tipe Data
        </a>
        <a
          href="/javascript/9"
          className={`block border rounded-md p-3 ${
            activePage === 9 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(9)}
        >
          9. Tipe Data : Angka
        </a>
        <a
          href="/javascript/10"
          className={`block border rounded-md p-3 ${
            activePage === 10 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(10)}
        >
          10. Operator : Aritmatika, Penugasan, dan Perbandingan
        </a>
        <a
          href="/javascript/11"
          className={`block border rounded-md p-3 ${
            activePage === 11 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(11)}
        >
          11. Operator : Logika, String, Typeof, dan Kondisional
        </a>
        <a
          href="/javascript/12"
          className={`block border rounded-md p-3 ${
            activePage === 12 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(12)}
        >
          12. Tipe Data : String
        </a>
        <a
          href="/javascript/13"
          className={`block border rounded-md p-3 ${
            activePage === 13 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(13)}
        >
          13. Tipe Data : Boolean
        </a>
        <a
          href="/javascript/14"
          className={`block border rounded-md p-3 ${
            activePage === 14 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(14)}
        >
          14. Variable
        </a>
        <a
          href="/javascript/15"
          className={`block border rounded-md p-3 ${
            activePage === 15 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(15)}
        >
          15. Menulis Javascript
        </a>
        <a
          href="/javascript/16"
          className={`block border rounded-md p-3 ${
            activePage === 16 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(16)}
        >
          16. Popup Box pada Javascript
        </a>
        <a
          href="/javascript/17"
          className={`block border rounded-md p-3 ${
            activePage === 17 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(17)}
        >
          17. Control Flow pada Javascript
        </a>
        <a
          href="/javascript/17"
          className={`block border rounded-md p-3 ${
            activePage === 17 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(18)}
        >
          18. Pengulangan : While
        </a>
        <a
          href="/javascript/17"
          className={`block border rounded-md p-3 ${
            activePage === 17 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(19)}
        >
          19. Pengulangan : Tabel Penelusuran
        </a>
        <a
          href="/javascript/17"
          className={`block border rounded-md p-3 ${
            activePage === 17 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(20)}
        >
          20. Pengulangan : For
        </a>
        <a
          href="/javascript/17"
          className={`block border rounded-md p-3 ${
            activePage === 17 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(21)}
        >
          21. Pengkondisian : If Else
        </a>
        <a
          href="/javascript/17"
          className={`block border rounded-md p-3 ${
            activePage === 17 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(22)}
        >
          22. Pengkondisian : If Else
        </a>
        <a
          href="/javascript/17"
          className={`block border rounded-md p-3 ${
            activePage === 17 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(23)}
        >
          23. Latihan Pengkondisian
        </a>
        <a
          href="/javascript/17"
          className={`block border rounded-md p-3 ${
            activePage === 17 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(24)}
        >
          24. Pengkondisian : Switch 
        </a>
        <a
          href="/javascript/17"
          className={`block border rounded-md p-3 ${
            activePage === 17 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(25)}
        >
          25. Pengulangan dan Pengkondisian Bersarang
        </a>
      </div>
    </div>
  );
}

export default NextPart;
