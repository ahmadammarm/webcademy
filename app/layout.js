import { Inter } from "next/font/google";
import "./globals.css";
import SideNavbar from "./components/SideNavbar";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Webcademy - Platform Belajar Online",
  description: "Webcademy - Platform Belajar Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div>
            <div className='sm:w-64 hidden fixed sm:block'>
                <SideNavbar />
            </div>
            <div className='ml-64'>
                <Header />
                {children}
            </div>
        </div>
      </body>
    </html>
  );
}
