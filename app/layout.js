import React from 'react';
import SideNavbar from './components/SideNavbar';
import Header from './components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import "./globals.css";
import ChatIcon from './components/ChatIcon';
import Footer from './components/Footer';

export const metadata = {
  title: 'Webcademy - Platform Belajar Online',
  description: 'Webcademy - Platform Belajar Online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-950">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen">
            <div className="sm:w-64 lg:w-64 hidden fixed sm:block">
              <SideNavbar />
            </div>
            <div className="ml-0 sm:ml-64">
              <Header />
              {children}
            </div>
          </div>
          <div className="
          fixed
          bottom-0
          right-0
          m-5
          ">
            <ChatIcon />
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
