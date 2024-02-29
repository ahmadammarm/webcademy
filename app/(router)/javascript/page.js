import React from "react";
import Image from "next/image";

const JavascriptData = [
  {
    image: "/assets/javascript/1.webp",
    title: "Intro",
    part: "Part 1",
    link: "/javascript/1"
  },
  {
    image: "/assets/javascript/2.webp",
    title: "Apa itu Pemrograman?",
    part: "Part 2",
    link: "./javascript"
  },
  {
    image: "/assets/javascript/3.webp",
    title: "Bahasa Pemrograman",
    part: "Part 3",
    link: "./javascript"
  },
  {
    image: "/assets/javascript/4.webp",
    title: "Compiler vs Interpreter",
    part: "Part 4",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/5.webp",
    title: "Kenapa Belajar Javascript?",
    part: "Part 5",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/6.webp",
    title: "Sejarah Jaavscript",
    part: "Part 6",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/7.webp",
    title: "Lingkungan Pengembangan Javascript",
    part: "Part 7",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/8.webp",
    title: "Nilai dan Tipe Data",
    part: "Part 8",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/9.webp",
    title: "Angka",
    part: "Part 9",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/10.webp",
    title: "Operator Aritmatika, Penugasan, dan Perbandingan",
    part: "Part 10",
    link: "/javascript/1"
  },
  {
    image: "/assets/javascript/11.webp",
    title: "Operator Logika, String, Typeof, dan Kondisional",
    part: "Part 11",
    link: "./javascript"
  },
  {
    image: "/assets/javascript/12.webp",
    title: "String",
    part: "Part 12",
    link: "./javascript"
  },
  {
    image: "/assets/javascript/13.webp",
    title: "Boolean",
    part: "Part 13",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/14.webp",
    title: "Variable",
    part: "Part 14",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/15.webp",
    title: "Menulis Javascript",
    part: "Part 15",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/16.webp",
    title: "Popup Box",
    part: "Part 16",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/17.webp",
    title: "Control Flow",
    part: "Part 17",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/18.webp",
    title: "Pengulangan While",
    part: "Part 18",
    link: "/javascript/1"
  },
  {
    image: "/assets/javascript/19.webp",
    title: "Tabel Penelusuran",
    part: "Part 19",
    link: "./javascript"
  },
  {
    image: "/assets/javascript/20.webp",
    title: "Pengulangan For",
    part: "Part 20",
    link: "./javascript"
  },
  {
    image: "/assets/javascript/21.webp",
    title: "Perkondisian If Else",
    part: "Part 21",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/22.webp",
    title: "Perkondisian Else If",
    part: "Part 22",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/23.webp",
    title: "Pengkondisian Latihan",
    part: "Part 23",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/24.webp",
    title: "Pengkondisian Switch",
    part: "Part 24",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/25.webp",
    title: "Pengulangan dan Pengkondisian Bersarang",
    part: "Part 25",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/26.webp",
    title: "Membuat Game Suwit Jawa",
    part: "Part 26",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/27.webp",
    title: "Function",
    part: "Part 27",
    link: "/javascript/1"
  },
  {
    image: "/assets/javascript/28.webp",
    title: "Membuat Function",
    part: "Part 28",
    link: "./javascript"
  },
  {
    image: "/assets/javascript/29.webp",
    title: "Parameter dan Argument",
    part: "Part 29",
    link: "./javascript"
  },
  {
    image: "/assets/javascript/30.webp",
    title: "Refactoring",
    part: "Part 30",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/31.webp",
    title: "Variable Scope",
    part: "Part 31",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/32.webp",
    title: "Rekursif",
    part: "Part 32",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/33.webp",
    title: "Declaration vs Expression",
    part: "Part 33",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/34.webp",
    title: "Array",
    part: "Part 34",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/35.webp",
    title: "Manipulasi Array",
    part: "Part 35",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/36.webp",
    title: "Array Slice dan Splice",
    part: "Part 36",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/37.webp",
    title: "Array ForEach dan Map",
    part: "Part 37",
    link: "/javascript/1"
  },
  {
    image: "/assets/javascript/38.webp",
    title: "Array Filter dan Find",
    part: "Part 38",
    link: "./javascript"
  },
  {
    image: "/assets/javascript/39.webp",
    title: "Membuat Program Pengelolaan Penumpang Angkot Part 1",
    part: "Part 39",
    link: "./javascript"
  },
  {
    image: "/assets/javascript/40.webp",
    title: "Membuat Program Pengelolaan Penumpang Angkot Part 2",
    part: "Part 40",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/41.webp",
    title: "Object",
    part: "Part 41",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/42.webp",
    title: "Membuat Object",
    part: "Part 42",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/43.webp",
    title: "This",
    part: "Part 43",
    link: "./tailwind"
  },
  {
    image: "/assets/javascript/44.webp",
    title: "Latihan Object",
    part: "Part 44",
    link: "./tailwind"
  },
];

const JavascriptCard = ({ image, title, part, link }) => {
  return (
    <div className="flex flex-col gap-5 cursor-pointer">
      <a href={link} className="block border border-primary rounded-md hover:shadow-md hover:shadow-primary transition duration-300 ease-in-out">
        <Image
          src={image}
          alt={title}
          width={500}
          height={400}
        />
        <div className="course-item-details flex flex-col gap-2 p-3">
          <h2 className="text-[20px] font-bold text-primary">{title}</h2>
          <p className="text-gray-500 dark:text-white">{part}</p>
        </div>
      </a>
    </div>
  );
};

export default function Javascript() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 gap-5 p-8">
      {JavascriptData.map((item) => (
        <JavascriptCard key={item.title} {...item} />
      ))}
    </div>
  );
}