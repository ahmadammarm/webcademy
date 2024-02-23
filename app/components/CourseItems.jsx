import React from "react";
import Image from "next/image";

const courseItemCardData = [
  {
    image: "/html/banner-html.jpg",
    title: "Belajar HTML",
    author: "Sandhika Galih",
    link: "./html"
  },
  {
    image: "/html/css-banner.jpg",
    title: "Belajar CSS",
    author: "Sandhika Galih",
    link: "./css"
  },
  {
    image: "/html/javascript.jpg",
    title: "Belajar Javascript",
    author: "Sandhika Galih",
    link: "./javascript"
  }
];

const CourseItemCard = ({ image, title, author, link }) => {
  return (
    <div className="course-item-card flex flex-col gap-5 cursor-pointer">
      <a href={link} className="block">
        <Image
          src={image}
          alt={title}
          width={500}
          height={150}
          className="rounded-md"
        />
        <div className="course-item-details flex flex-col gap-2 mt-3">
          <h2 className="text-[20px] font-bold text-primary">{title}</h2>
          <p className="text-gray-500 dark:text-white">{author}</p>
        </div>
      </a>
    </div>
  );
};

export default function CourseItemCards() {
  return (
    <div className="flex lg:flex-row md:flex-col gap-5">
      {courseItemCardData.map((item) => (
        <CourseItemCard key={item.title} {...item} />
      ))}
    </div>
  );
}
