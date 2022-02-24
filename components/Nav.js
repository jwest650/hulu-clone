import React from "react";
import request from "../utils/request";
import { useRouter } from "next/router";
function Nav() {
    const router = useRouter();

    return (
        <nav className="relative">
            <div className="flex px-10 sm:px-20 space-x-10 whitespace-nowrap overflow-x-scroll scrollbar-hide text-2xl">
                {Object.entries(request).map(([key, { title, url }]) => (
                    <h1
                        className="font-bold capitalize cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 last:pr-24"
                        key={key}
                        onClick={() => router.push(`/?genre=${key}`)}
                    >
                        {title}
                    </h1>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A]         h-10 w-1/12" />
        </nav>
    );
}

export default Nav;
