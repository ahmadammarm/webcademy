"use client";

import { useState, useEffect } from "react";
import { ModeToggle } from "@/components/ui/toggle";
import SideNavbar from "./SideNavbar";
import { UserButton } from "@clerk/nextjs";

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const sideNavbar = document.getElementById("sideNavbar");
      if (sideNavbar && !sideNavbar.contains(event.target)) {
        setShowNavbar(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 600) {
        setShowNavbar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="dark:bg-slate-900 bg-white shadow-md relative">
      <div
        id="sideNavbar"
        className={`fixed left-0 top-0 h-full bg-white z-10 transition-transform duration-300 ease-in-out transform ${
          showNavbar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SideNavbar />
      </div>
      <div className="flex p-4 justify-between items-center">
        <div className="lg:hidden sm:hidden">
          <button onClick={toggleNavbar}>
            {showNavbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="flex ml-auto">
          <div className="mr-5">
            <ModeToggle />
          </div>
          <div className="mt-1">
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
