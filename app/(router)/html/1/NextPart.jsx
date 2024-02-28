import React from 'react'

function NextPart() {
  return (
    <div className="p-5 text-center rounded-sm bg-white dark:bg-slate-900">
        <h2 className="text-[20px] font-bold">Belajar HTML5</h2>
        <div className="flex flex-col gap-5 mt-5">
            <a href="/html/1" className="block border rounded-md p-3 hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary hover:text-primary transition duration-300 ease-in-out">Apa itu HTML5 ?</a>
            <a href="/html/2" className="block border rounded-md p-3 hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary hover:text-primary transition duration-300 ease-in-out">Apa itu Semantic HTML5 ?</a>
            <a href="/html/3" className="block border rounded-md p-3 hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary hover:text-primary transition duration-300 ease-in-out">Images Elements</a>
            <a href="/html/4" className="block border rounded-md p-3 hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary hover:text-primary transition duration-300 ease-in-out">Audio dan Video</a>
            <a href="/html/5" className="block border rounded-md p-3 hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary hover:text-primary transition duration-300 ease-in-out">Canvas</a>
            <a href="/html/6" className="block border rounded-md p-3 hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary hover:text-primary transition duration-300 ease-in-out">SVG</a>
            <a href="/html/7" className="block border rounded-md p-3 hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary hover:text-primary transition duration-300 ease-in-out">Form Validation</a>
            <a href="/html/8" className="block border rounded-md p-3 hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary hover:text-primary transition duration-300 ease-in-out">Web Storage</a>
            <a href="/html/9" className="block border rounded-md p-3 hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary hover:text-primary transition duration-300 ease-in-out">Accessibilty</a>
        </div>
    </div>
    
  )
}

export default NextPart