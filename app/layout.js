import "./globals.css";
import SideNavbar from "./components/SideNavbar";
import Header from "./components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "MEDIU - Platform Belajar Online",
  description: "MEDIU - Platform Belajar Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-950">
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <div>
            <div className='sm:w-64 hidden fixed sm:block'>
                <SideNavbar />
            </div>
            <div className='ml-64'>
                <Header />
                {children}
            </div>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
