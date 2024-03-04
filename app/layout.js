import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { Toaster } from '@/components/ui/toaster';



export const metadata = {
  title: 'Webcademy - Platform Belajar Online',
  description: 'Webcademy - Platform Belajar Online',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: [dark],
      variables: { colorPrimary: 'rgb(13 148 136)' },

    }}
    >
    <html lang="en">
      <body className="dark:bg-slate-950">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="
          relative
          min-h-screen
          flex
          items-center
          justify-center
          ">
          {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
