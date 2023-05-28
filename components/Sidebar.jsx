"use client"
import React from "react";
import { useState } from "react";
import {
  RiInstagramLine,
  RiFacebookBoxLine,
  RiTwitterLine,
  RiYoutubeLine,
  RiRefund2Line,
  RiFilterLine,
  RiCloseLine,
  
} from "react-icons/ri";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <div className={`w-[80%] lg:w-80 md:w-[40%] h-full fixed lg:static ${showSidebar ? "left-0" : "-left-full"} lg:w-80 overflow-y-scroll transition-all bg-[#181a20] lg:p-0 shadow-2xl lg:shadow-none z-50`}>
        
        {/* Search */}
        <div className="bg-[#362c29]/50 text-gray-300 p-4 rounded-2xl h-full">
          <h4 className="mb-4 text-white text-lg">Categories</h4>

          <div className="text-gray-400 flex flex-col gap-2">
            <div className="flex items-center gap-2 ">
              <input type="checkbox" id="indy" className="accent-[#e58d27]" />
              <label htmlFor="indy">Indy</label>
            </div>
            <div className="flex items-center gap-2 ">
              <input
                type="checkbox"
                id="adventure"
                className="accent-[#e58d27]"
              />
              <label htmlFor="adventure">Adventure</label>
            </div>
            <div className="flex items-center gap-2 ">
              <input type="checkbox" id="MMO" className="accent-[#e58d27]" />
              <label htmlFor="MMO">MMO</label>
            </div>
            <div className="flex items-center gap-2 ">
              <input
                type="checkbox"
                id="Casual Game"
                className="accent-[#e58d27]"
              />
              <label htmlFor="Casual Game">Casual Game</label>
            </div>
            <div className="flex items-center gap-2 ">
              <input
                type="checkbox"
                id="Strategy"
                className="accent-[#e58d27]"
              />
              <label htmlFor="Strategy">Strategy</label>
            </div>
            <div className="flex items-center gap-2 ">
              <input
                type="checkbox"
                id="Simulator"
                className="accent-[#e58d27]"
              />
              <label htmlFor="Simulator">Simulator</label>
            </div>
            <div className="flex items-center gap-2 ">
              <input
                type="checkbox"
                id="Sports Games"
                className="accent-[#e58d27]"
              />
              <label htmlFor="Sports Games">Sports Games</label>
            </div>
            <div className="flex items-center gap-2 ">
              <input
                type="checkbox"
                id="Actions Games"
                className="accent-[#e58d27]"
              />
              <label htmlFor="Actions Games">Actions Games</label>
            </div>
          </div>
          <h4 className="my-4 text-white text-lg">Plataforms</h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 ">
              <input type="checkbox" id="Pc" className="accent-[#e58d27]" />
              <label htmlFor="Pc">Pc</label>
            </div>
            <div className="flex items-center gap-2 ">
              <input type="checkbox" id="PlayStation 5" className="accent-[#e58d27]" />
              <label htmlFor="PlayStation 5">PlayStation 5</label>
            </div>
            <div className="flex items-center gap-2 ">
              <input type="checkbox" id="PlayStation 4" className="accent-[#e58d27]" />
              <label htmlFor="PlayStation 4">PlayStation 4</label>
            </div>
            <div className="flex items-center gap-2 ">
              <input type="checkbox" id="Xbox Series" className="accent-[#e58d27]" />
              <label htmlFor="Xbox Series">Xbox Series</label>
            </div>
            <div className="flex items-center gap-2 ">
              <input type="checkbox" id="Nitendo Switch" className="accent-[#e58d27]" />
              <label htmlFor="Nitendo Switch">Nintendo Switch</label>
            </div>
            <h4 className="my-4 text-white text-lg">Prices</h4>
            <form action="" className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                  <div className="relative">
                      <RiRefund2Line className="absolute left-2 top-1/2 -translate-y-1/2"/>
                      <input type="number" className="w-full bg-[#181a20] outline-none py-2 px-4 pl-7 pr-4  rounded-xl"/>
                  </div>
                  <span>-</span>
                  <div className="relative">
                      <RiRefund2Line className="absolute left-2 top-1/2 -translate-y-1/2"/>
                      <input type="number" className="w-full bg-[#181a20] outline-none py-2 px-4 pl-7 pr-4 rounded-xl"/>
                  </div>
              </div>
              <button type="submit" className="p-3 bg-[#e58d27] text-black font-bold rounded-full w-full hover:-translate-y-1 transition-all">Apply filters</button>
            </form>
          </div>
        </div>
        {/* icons social */}

        <div className="text-gray-300 flex text-xl justify-between items-center w-full p-4">
          <button className="hover:text-[#e58d27] transition-colors">
            <RiTwitterLine />
          </button>
          <button className="hover:text-[#e58d27] transition-colors">
            <RiInstagramLine />
          </button>
          <button className="hover:text-[#e58d27] transition-colors">
            <RiFacebookBoxLine />
          </button>
          <button className="hover:text-[#e58d27] transition-colors">
            <RiYoutubeLine />
          </button>
        </div>
      </div>
      {/* Button Mobile */}
      <button onClick={()=>setShowSidebar(!showSidebar)} className=" bg-[#e58d27] lg:hidden rounded-full fixed bottom-4 right-4 p-4 z-40 ">
        {showSidebar ? <RiCloseLine/>  : <RiFilterLine/> }
      </button>
    </>
  );
};

export default Sidebar;
