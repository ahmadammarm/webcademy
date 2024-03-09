import React from "react";
import Image from "next/image";

const TailwindData = [
  {
    image: "/assets/tailwind/1.png",
    title: "Apa itu Tailwind CSS ?",
    part: "Part 1",
    link: "/tailwind/1"
  },
  {
    image: "/assets/tailwind/2.png",
    title: "Kenapa Belajar Tailwind CSS ?",
    part: "Part 2",
    link: "/tailwind/2"
  },
  {
    image: "/assets/tailwind/3.png",
    title: "Instalasi dan Konfigurasi",
    part: "Part 3",
    link: "/tailwind/3"
  },
  {
    image: "/assets/tailwind/4.png",
    title: "Basic Utility Part 1",
    part: "Part 4",
    link: "/tailwind/4"
  },
  {
    image: "/assets/tailwind/5.png",
    title: "Basic Utility Part 2",
    part: "Part 5",
    link: "/tailwind/5"
  },
  {
    image: "/assets/tailwind/6.png",
    title: "Pseudo Class dan Dark Mode",
    part: "Part 6",
    link: "/tailwind/6"
  },
  {
    image: "/assets/tailwind/7.png",
    title: "Transform, Transition, dan Animation",
    part: "Part 7",
    link: "/tailwind/7"
  },
  {
    image: "/assets/tailwind/8.png",
    title: "Layouting",
    part: "Part 8",
    link: "/tailwind/8"
  },
  {
    image: "/assets/tailwind/9.png",
    title: "Responsive Design",
    part: "Part 9",
    link: "/tailwind/9"
  },
  {
    image: "/assets/tailwind/10.png",
    title: "Flexbox",
    part: "Part 10",
    link: "/tailwind/10"
  },
  {
    image: "/assets/tailwind/11.png",
    title: "Grid",
    part: "Part 11",
    link: "/tailwind/11"
  },
  {
    image: "/assets/tailwind/12.png",
    title: "Function dan Directives",
    part: "Part 12",
    link: "/tailwind/12"
  },
];

const TailwindCard = ({ image, title, part, link }) => {
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

export default function Tailwind() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-5 p-8">
      {TailwindData.map((item) => (
        <TailwindCard key={item.title} {...item} />
      ))}
    </div>
  );
}
