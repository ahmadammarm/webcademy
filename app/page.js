import WelcomeBanner from "./components/WelcomeBanner";
import CourseList from "./components/CourseList";

export default function Home() {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-4 p-5'>
        {/* Bagian Kiri */}
        <div className="col-span-3">
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
