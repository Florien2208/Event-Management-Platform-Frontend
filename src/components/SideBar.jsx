import bus from "../images/Logo-4x.png"

import { HiViewGrid } from "react-icons/hi";
import { SiGooglelens } from "react-icons/si";
import { RiBookReadLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiMiniBars4 } from "react-icons/hi2";
import { useState } from "react";

import { BsDatabase } from "react-icons/bs";
import { GrDeliver } from "react-icons/gr";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineHelpCenter } from "react-icons/md";
import { CiViewList, CiCalendarDate } from "react-icons/ci";
import { RiMessage2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdOutlineSubscriptions } from "react-icons/md";
function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen flex ">
      <div className="sm:hidden ">
        <button onClick={toggleSidebar}>
          <HiMiniBars4 className="h-12 w-12" />
        </button>
      </div>
      <div
        className={`w-56 bg-gray-400 shadow border border-gray-100 sm:block ${
          isOpen ? "block" : "hidden"
        }`}
      >

        <div className=" top-[50px] absolute flex-col justify-start items-center gap-4 inline-flex">
          <div className="w-36 h-[52px]  bg-white rounded-2xl border border-gray-200">
            <img src={bus} alt="bazfarm" />
       
          </div>
          <div className="flex-col ml-3  justify-start items-start gap-3 flex ">
            <div className="flex-col justify-start items-start gap-0.1 flex">
              <div className=" pl-8  pb-1.5 justify-start items-center inline-flex">
                <div className="text-gray-400 text-base font-normal font-['Inter'] leading-[18px]">
                  Home
                </div>
              </div>
              <div className="flex-col  justify-start items-start flex ">
                <Link to="dashboard">
                  <div className="self-stretch mt-7 h-6 w-48 rounded-[8px] justify-start items-center gap-2.5 inline-flex hover:border-2 hover:border-emerald-800 ">
                    <div className="w-5 h-5 relative " />
                    <div className="text-xl">
                      <HiViewGrid />
                    </div>
                    <div className="grow flex gap-3 shrink hover:text-green-800 basis-0 text-slate-900 text-base font-normal font-['Inter']">
                      <b> Overview</b>
                    </div>
                  </div>
                </Link>
                <Link to="farm">
                  <div className="self-stretch mt-5 h-6 w-48 rounded-[8px] justify-start items-center gap-2.5 inline-flex hover:border-2 hover:border-emerald-800">
                    <div className="w-5 h-5 relative" />
                    <div className="text-base">
                      <GrDeliver />
                    </div>
                    <div className="grow flex gap-3 shrink hover:text-green-800 basis-0 text-slate-900 text-base font-normal font-['Inter']">
                      <b> All Events</b>
                    </div>
                  </div>
                </Link>
                <Link to="Reporting">
                  <div className="self-stretch mt-5 hover:text-green-800 h-6 w-48 rounded-[8px] justify-start items-center gap-2.5 inline-flex hover:border-2 hover:border-emerald-800">
                    <div className="w-5 h-5 relative" />
                    <div className="text-base">
                      <BsDatabase />
                    </div>
                    <div className="grow flex text-base gap-3 hover:text-green-800 shrink basis-0 text-slate-800 font-medium font-['Inter']">
                      <div className="">
                        <b>Users</b>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default SideBar;
