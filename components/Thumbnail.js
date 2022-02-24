import Image from "next/image";
import React from "react";
import { HiThumbUp } from "react-icons/hi";
function Thumbnail({ data }) {
    const BaseImg = `https://image.tmdb.org/t/p/original`;

    return (
        <div className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image
                layout="responsive"
                src={`${BaseImg}${
                    data?.poster_path || data?.backdrop_path || data.poster_path
                }`}
                width={768}
                height={480}
            />

            <div className="px-2">
                <p className="truncate max-w-md text-sm">{data.overview}</p>
                <h2 className="mt-1 text-base text-white transition-all duration-100 ease-in group-hover:font-bold">
                    {data?.title}
                </h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {data.release_date}
                    <HiThumbUp className="h-5 mx-2" />
                    {data.vote_count}
                </p>
            </div>
        </div>
    );
}

export default Thumbnail;
