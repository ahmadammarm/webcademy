import React from "react";
import Image from "next/image";

const CSSData = [
  {
    image: "/assets/css/1.png",
    title: "Intro",
    part: "Part 1",
    link: "/css/1"
  },
  {
    image: "/assets/css/2.webp",
    title: "Border Radius",
    part: "Part 2",
    link: "./css/2"
  },
  {
    image: "/assets/css/3.webp",
    title: "Opacity",
    part: "Part 3",
    link: "./css/3"
  },
  {
    image: "/assets/css/4.webp",
    title: "RGBa dan HSLa",
    part: "Part 4",
    link: "./css/4"
  },
  {
    image: "/assets/css/5.webp",
    title: "Box Shadow Part 1",
    part: "Part 5",
    link: "./css/5"
  },
  {
    image: "/assets/css/6.webp",
    title: "Box Shadow Part 2",
    part: "Part 6",
    link: "./css/6"
  },
  {
    image: "/assets/css/7.webp",
    title: "Text Shadow",
    part: "Part 7",
    link: "./css/7"
  },
  {
    image: "/assets/css/8.webp",
    title: "Linear Gradient",
    part: "Part 8",
    link: "./css/8"
  },
  {
    image: "/assets/css/9.webp",
    title: "Radial Gradient",
    part: "Part 9",
    link: "./css/9"
  },
  {
    image: "/assets/css/10.webp",
    title: "Font Face",
    part: "Part 10",
    link: "/css/10"
  },
  {
    image: "/assets/css/11.webp",
    title: "Web Font Generator",
    part: "Part 11",
    link: "./css/11"
  },
  {
    image: "/assets/css/12.webp",
    title: "Vendor Prefix",
    part: "Part 12",
    link: "./css/12"
  },
  {
    image: "/assets/css/13.webp",
    title: "Filter",
    part: "Part 13",
    link: "./css/13"
  },
  {
    image: "/assets/css/14.webp",
    title: "Transform",
    part: "Part 14",
    link: "./css/14"
  },
  {
    image: "/assets/css/15.webp",
    title: "Transition Part 1",
    part: "Part 15",
    link: "./css/15"
  },
  {
    image: "/assets/css/16.webp",
    title: "Transition Part 2",
    part: "Part 16",
    link: "./css/16"
  },
  {
    image: "/assets/css/17.webp",
    title: "Animation",
    part: "Part 17",
    link: "./css/17"
  },
];

const CSSCard = ({ image, title, part, link }) => {
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

export default function CSS() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 gap-5 p-8">
      {CSSData.map((item) => (
        <CSSCard key={item.title} {...item} />
      ))}
    </div>
  );
}
