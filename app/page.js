import { Button } from "@/components/ui/button";
import Image from "next/image";
import WelcomeBanner from "./components/WelcomeBanner";

export default function Home() {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        {/* Bagian Kiri */}
        <div className="col-span-2">
          <WelcomeBanner />
        </div>
        {/* Bagian Kanan */}
        <div>
          Bagian Kanan
        </div>
      </div>
    </div>
  );
}
