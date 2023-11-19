import React from "react";
import Footer from "../Footer/Footer";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { Link}  from "react-router-dom";
export default function Homepage() {
  if(!Cookies.get('sidingUserEmail')){
    return <Navigate to={'/login'}/>
}
  return (
    <>
      <div className="flex justify-between items-center w-[100%]">
        <div className="w-[40%] flex justify-center items-center gap-11">
            <div>
              <Link to={'/update/stocks'}>
              <div className="button">
          <div
            href="#_"
            class="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span class="relative z-20 flex items-center text-sm gap-2">
              <MdOutlineSystemUpdateAlt/>
              Update Your Mine Data
            </span>
          </div>
              </div>
              </Link>
            </div>
            <div>
             <Link to={'/view/stocks'}>
             <div className="button">
            <div
            href="#_"
            class="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span class="relative z-20 flex items-center text-sm gap-2">
              <FaRegEye/>
              View All Stocks Data
            </span>
          </div>
              </div>
             </Link>
            </div>
        </div>
        <div className="flex w-[60%] justify-center items-center">
          <img src="/assets/images/coalBack.png" className="w-[80%]" alt="coalbgError" />
        </div>
      </div>
      <Footer />
    </>
  );
}
