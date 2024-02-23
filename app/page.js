import { Button } from "@/components/ui/button";
import Image from "next/image";
import WelcomeBanner from "./components/WelcomeBanner";
import CourseList from "./components/CourseList";

export default function Home() {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 p-5'>
        {/* Bagian Kiri */}
        <div className="col-span-2">
          <WelcomeBanner />
          <CourseList />
        </div>
        {/* Bagian Kanan */}
        <div>
          Bagian Kanan
        </div>
      </div>
    </div>
  );
}
