import React from "react";
import { SiHulu } from "react-icons/si";
import Icons from "./Icons";
import {
    HiHome,
    HiLightningBolt,
    HiBadgeCheck,
    HiSearch,
    HiCollection,
    HiUser,
} from "react-icons/hi";
function Header() {
    return (
        <header className="flex flex-col md:flex-row items-center justify-between m-5 h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl  ">
                <Icons title="Home" Icon={HiHome} />
                <Icons title="Trending" Icon={HiLightningBolt} />
                <Icons title="Verified" Icon={HiBadgeCheck} />
                <Icons title="Collection" Icon={HiCollection} />
                <Icons title="Search" Icon={HiSearch} />
                <Icons title="Account" Icon={HiUser} />
            </div>

            <div className="h-16">
                <SiHulu className=" text-5xl" />
            </div>
        </header>
    );
}

export default Header;
