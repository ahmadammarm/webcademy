import React from "react";
import Image from "next/image";

const HTMLData = [
  {
    image: "/assets/html/1.png",
    title: "Apa itu HTML5 ?",
    part: "Part 1",
    link: "/html/1"
  },
  {
    image: "/assets/html/2.png",
    title: "Apa itu Semantic HTML5 ?",
    part: "Part 2",
    link: "./css"
  },
  {
    image: "/assets/html/3.png",
    title: "Image Elements",
    part: "Part 3",
    link: "./javascript"
  },
  {
    image: "/assets/html/4.png",
    title: "Audio dan Video",
    part: "Part 4",
    link: "./tailwind"
  },
  {
    image: "/assets/html/5.png",
    title: "Canvas",
    part: "Part 5",
    link: "./tailwind"
  },
  {
    image: "/assets/html/6.png",
    title: "SVG",
    part: "Part 6",
    link: "./tailwind"
  },
  {
    image: "/assets/html/7.png",
    title: "Form Validation",
    part: "Part 7",
    link: "./tailwind"
  },
  {
    image: "/assets/html/8.png",
    title: "Web Storage",
    part: "Part 8",
    link: "./tailwind"
  },
  {
    image: "/assets/html/9.png",
    title: "Accessibility",
    part: "Part 9",
    link: "./tailwind"
  }
];

const HTMLCard = ({ image, title, part, link }) => {
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

export default function HTML() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-5 p-8">
      {HTMLData.map((item) => (
        <HTMLCard key={item.title} {...item} />
      ))}
    </div>
  );
}
