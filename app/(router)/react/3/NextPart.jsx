"use client";

import React, { useState } from "react";

function NextPart() {
  const [activePage, setActivePage] = useState(3);

  const handleClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <div className="p-5 text-center rounded-sm bg-white dark:bg-slate-900">
      <h2 className="text-[20px] font-bold">Belajar React</h2>
      <div className="flex flex-col gap-5 mt-5">
        <a
          href="/react/1"
          className={`block border rounded-md p-3 ${
            activePage === 1 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(1)}
        >
          1. Pengenalan React
        </a>
        <a
          href="/react/2"
          className={`block border rounded-md p-3 ${
            activePage === 2 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(2)}
        >
          2. Setup Project
        </a>
        <a
          href="/react/3"
          className={`block border rounded-md p-3 ${
            activePage === 3 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(3)}
        >
          3. Component & Props
        </a>
        <a
          href="/react/4"
          className={`block border rounded-md p-3 ${
            activePage === 4 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(4)}
        >
          4. Pengenalan Atomic Design
        </a>
        <a
          href="/react/5"
          className={`block border rounded-md p-3 ${
            activePage === 5 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(5)}
        >
          5. Implementasi Atomic Design
        </a>
        <a
          href="/react/6"
          className={`block border rounded-md p-3 ${
            activePage === 6 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(6)}
        >
          6. React Router
        </a>
        <a
          href="/react/7"
          className={`block border rounded-md p-3 ${
            activePage === 7 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(7)}
        >
          7. Conditional Rendering
        </a>
        <a
          href="/react/8"
          className={`block border rounded-md p-3 ${
            activePage === 8 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(8)}
        >
          8. Nested Component
        </a>
        <a
          href="/react/9"
          className={`block border rounded-md p-3 ${
            activePage === 9 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(9)}
        >
          9. Rendering Lists
        </a>
        <a
          href="/react/10"
          className={`block border rounded-md p-3 ${
            activePage === 10 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(10)}
        >
          10. Event Handler
        </a>
        <a
          href="/react/11"
          className={`block border rounded-md p-3 ${
            activePage === 11 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(11)}
        >
          11. State
        </a>
        <a
          href="/react/12"
          className={`block border rounded-md p-3 ${
            activePage === 12 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(12)}
        >
          12. useState
        </a>
        <a
          href="/react/13"
          className={`block border rounded-md p-3 ${
            activePage === 13 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(13)}
        >
          13. Lifecycle
        </a>
        <a
          href="/react/14"
          className={`block border rounded-md p-3 ${
            activePage === 14 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(14)}
        >
          14. useEffect
        </a>
        <a
          href="/react/15"
          className={`block border rounded-md p-3 ${
            activePage === 15 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(15)}
        >
          15. useRef
        </a>
        <a
          href="/react/16"
          className={`block border rounded-md p-3 ${
            activePage === 16 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(16)}
        >
          16. Get Data API
        </a>
        <a
          href="/react/17"
          className={`block border rounded-md p-3 ${
            activePage === 17 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(17)}
        >
          17. Post Data API
        </a>
        <a
          href="/react/17"
          className={`block border rounded-md p-3 ${
            activePage === 17 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(18)}
        >
          18. Custom Hooks
        </a>
        <a
          href="/react/17"
          className={`block border rounded-md p-3 ${
            activePage === 17 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(19)}
        >
          19. Dynamic Routing
        </a>
        <a
          href="/react/17"
          className={`block border rounded-md p-3 ${
            activePage === 17 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(20)}
        >
          20. Redux State Management
        </a>
        <a
          href="/react/17"
          className={`block border rounded-md p-3 ${
            activePage === 17 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(21)}
        >
          21. Redux Toolkit
        </a>
        <a
          href="/react/17"
          className={`block border rounded-md p-3 ${
            activePage === 17 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(22)}
        >
          22. Implementasi React Reduc
        </a>
        <a
          href="/react/17"
          className={`block border rounded-md p-3 ${
            activePage === 17 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(23)}
        >
          23. useContext
        </a>
        <a
          href="/react/17"
          className={`block border rounded-md p-3 ${
            activePage === 17 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(24)}
        >
          24. useReducer 
        </a>
        <a
          href="/react/17"
          className={`block border rounded-md p-3 ${
            activePage === 17 ? "bg-primary" : "bg-gray-200 dark:bg-slate-900"
          } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
          onClick={() => handleClick(25)}
        >
          25. Review Materi
        </a>
      </div>
    </div>
  );
}

export default NextPart;
