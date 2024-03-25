import Image from "next/image";

const ReactData = [
  {
    image: "/assets/react/1.png",
    title: "Pengenalan React",
    part: "Part 1",
    link: "/react/1"
  },
  {
    image: "/assets/react/2.png",
    title: "Setup Project",
    part: "Part 2",
    link: "/react/2"
  },
  {
    image: "/assets/react/3.png",
    title: "Component & Props",
    part: "Part 3",
    link: "/react/3"
  },
  {
    image: "/assets/react/4.png",
    title: "Pengenalan Atomic Design",
    part: "Part 4",
    link: "/react/4"
  },
  {
    image: "/assets/react/5.png",
    title: "Implementasi Atomic Design",
    part: "Part 5",
    link: "/react/5"
  },
  {
    image: "/assets/react/6.png",
    title: "React Router",
    part: "Part 6",
    link: "/react/6"
  },
  {
    image: "/assets/react/7.png",
    title: "Conditional Rendering",
    part: "Part 7",
    link: "/react/7"
  },
  {
    image: "/assets/react/8.png",
    title: "Nested Component",
    part: "Part 8",
    link: "/react/8"
  },
  {
    image: "/assets/react/9.png",
    title: "Rendering Lists",
    part: "Part 9",
    link: "/react/9"
  },
  {
    image: "/assets/react/10.png",
    title: "Event Handler",
    part: "Part 10",
    link: "/react/10"
  },
  {
    image: "/assets/react/11.png",
    title: "State",
    part: "Part 11",
    link: "./react/11"
  },
  {
    image: "/assets/react/12.png",
    title: "useState",
    part: "Part 12",
    link: "./react/12"
  },
  {
    image: "/assets/react/13.png",
    title: "Lifecycle",
    part: "Part 13",
    link: "/react/13"
  },
  {
    image: "/assets/react/14.png",
    title: "useEffect",
    part: "Part 14",
    link: "/react/14"
  },
  {
    image: "/assets/react/15.png",
    title: "useRef",
    part: "Part 15",
    link: "/react/15"
  },
  {
    image: "/assets/react/16.png",
    title: "Get Data API",
    part: "Part 16",
    link: "/react/16"
  },
  {
    image: "/assets/react/17.png",
    title: "Post Data API",
    part: "Part 17",
    link: "/react/17"
  },
  {
    image: "/assets/react/18.png",
    title: "Custom Hooks",
    part: "Part 18",
    link: "/react/18"
  },
  {
    image: "/assets/react/19.png",
    title: "Dynamic Routing",
    part: "Part 19",
    link: "./react/19"
  },
  {
    image: "/assets/react/20.png",
    title: "Redux State Management",
    part: "Part 20",
    link: "./react/20"
  },
  {
    image: "/assets/react/21.png",
    title: "Redux Toolkit",
    part: "Part 21",
    link: "/react/21"
  },
  {
    image: "/assets/react/22.png",
    title: "Implementasi React Reduc",
    part: "Part 22",
    link: "/react/22"
  },
  {
    image: "/assets/react/23.png",
    title: "useContext",
    part: "Part 23",
    link: "/react/23"
  },
  {
    image: "/assets/react/24.png",
    title: "useReducer",
    part: "Part 24",
    link: "/react/24"
  },
  {
    image: "/assets/react/25.png",
    title: "Review Materi",
    part: "Part 25",
    link: "/react/25"
  },
];

const ReactCard = ({ image, title, part, link }) => {
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

export default function React() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 gap-5 p-8">
      {ReactData.map((item) => (
        <ReactCard key={item.title} {...item} />
      ))}
    </div>
  );
}
