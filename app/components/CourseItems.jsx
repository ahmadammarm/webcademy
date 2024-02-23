import React from "react";
import Image from "next/image";

function CourseItems() {
  return (
    <>
      <div className="flex lg:flex-row md:flex-col gap-5">
        <div className="course-item-card flex flex-col">
            <Image src="/html/banner-html.jpg" width={500} height={150} className="rounded-md" />
            <h2 className="text-[20px] font-bold text-primary mt-3">Belajar HTML</h2>
            <p className="text-gray-500 dark:text-white">Sandhika Galih</p>
        </div>
        <div className="course-item-card flex flex-col">
            <Image src="/html/css-banner.jpg" width={500} height={150} className="rounded-md" />
            <h2 className="text-[20px] font-bold text-primary mt-3">Belajar CSS</h2>
            <p className="text-gray-500 dark:text-white">Sandhika Galih</p>
        </div>
        <div className="course-item-card flex flex-col">
            <Image src="/html/javascript.jpg" width={500} height={150} className="rounded-md" />
            <h2 className="text-[20px] font-bold text-primary mt-3">Belajar Javascript</h2>
            <p className="text-gray-500 dark:text-white">Sandhika Galih</p>
        </div>
      </div>
    </>
  );
}

export default CourseItems;
