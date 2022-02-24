import React from "react";

function Icons({ title, Icon }) {
    return (
        <div
            className="w-12 flex flex-col items-center group hover:text-white cursor-pointer
            h-16 
        "
        >
            <Icon className="  h-16 w-16 group-hover:animate-bounce mb-1" />
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">
                {title}
            </p>
        </div>
    );
}

export default Icons;
