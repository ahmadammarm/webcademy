import WelcomeBanner from "./components/WelcomeBanner";
import CourseList from "./components/CourseList";
import SideBanners from "./components/SideBanners";

export default function Home() {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-4 p-5 gap-5'>
        {/* Bagian Kiri */}
        <div className="col-span-3">
          <WelcomeBanner />
          <CourseList />
        </div>
        {/* Bagian Kanan */}
        <div className="p-5 bg-white dark:bg-slate-900 rounded-xl">
          <SideBanners />
        </div>
      </div>
    </div>
  );
}
