"use client";

import React, { useState } from "react";

function NextPart() {
  const [activePage, setActivePage] = useState(3);

  const handleClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <div className="p-5 text-center rounded-sm bg-white dark:bg-slate-900">
      <h2 className="text-[20px] font-bold">Belajar Tailwind CSS</h2>
      <div className="flex flex-col gap-5 mt-5">
        <a
          href="/tailwind/1"
          className={`block border rounded-md p-3 ${
            activePage === 1 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(1)}
        >
          1. Apa itu Tailwind CSS ?
        </a>
        <a
          href="/tailwind/2"
          className={`block border rounded-md p-3 ${
            activePage === 2 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(2)}
        >
          2. Kenapa Belajar Tailwind CSS ?
        </a>
        <a
          href="/tailwind/3"
          className={`block border rounded-md p-3 ${
            activePage === 3 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(3)}
        >
          3. Instalasi dan Konfigurasi
        </a>
        <a
          href="/tailwind/4"
          className={`block border rounded-md p-3 ${
            activePage === 4 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(4)}
        >
          4. Basic Utility Part 1
        </a>
        <a
          href="/tailwind/5"
          className={`block border rounded-md p-3 ${
            activePage === 5 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(5)}
        >
          5. Basic Utility Part 2
        </a>
        <a
          href="/tailwind/6"
          className={`block border rounded-md p-3 ${
            activePage === 6 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(6)}
        >
          6. Pseudo Class dan Dark Mode
        </a>
        <a
          href="/tailwind/7"
          className={`block border rounded-md p-3 ${
            activePage === 7 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(7)}
        >
          7. Transform, Transition, dan Animation
        </a>
        <a
          href="/tailwind/8"
          className={`block border rounded-md p-3 ${
            activePage === 8 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(8)}
        >
          8. Layouting
        </a>
        <a
          href="/tailwind/9"
          className={`block border rounded-md p-3 ${
            activePage === 9 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(9)}
        >
          9. Responsive Design
        </a>
        <a
          href="/tailwind/10"
          className={`block border rounded-md p-3 ${
            activePage === 10 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(10)}
        >
          10. Flexbox
        </a>
        <a
          href="/tailwind/11"
          className={`block border rounded-md p-3 ${
            activePage === 11 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(11)}
        >
          11. Grid
        </a>
        <a
          href="/tailwind/12"
          className={`block border rounded-md p-3 ${
            activePage === 12 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(12)}
        >
          12. Functions dan Directives
        </a>
      </div>
    </div>
  );
}

export default NextPart;
