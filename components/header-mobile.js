import React, { Component, useState, useEffect, useRef } from "react";
import HeaderLogo from "../public/images/HeaderLogo.png";
import InnovationLogo from "../public/images/innovationlogo.png";
import Background from "../public/images/Background.jpg";
import Image from "next/image";

function HeaderMobile( {workspaceMobileRef} ) {

    const scrollToWorkspace = () => {
        workspaceMobileRef.current.scrollIntoView({ behavior: "smooth" });
      };

  return (
    <div className="max-w-[1800px] mr-auto ml-auto w-full h-full">
      <div
        className="w-[100%] flex flex-col px-[30px] justify-between items-center mt-[110px] sm:px-[20px]"
      >
        <div className="flex flex-col z-[10] items-center">
          <div
            className="flex text-[8.5vw] text-[#005596] 
          font-[600] text-center xsm:text-[45px]"
          >
            <h1
              className="gradient bg-gradient-to-r from-[#005596] to-[#001E60] bg-clip-text 
            text-transparent fadeInSlow"
            >
              Innovation Network
            </h1>
          </div>

          <div
            className="text-[#005596] font-[500] text-[20px] text-center mt-[10px] fadeInSlow"
          >
            Your Space to &thinsp;
            <span className="text-[#001E60]">Imagine</span>, &thinsp;
            <span className="text-[#001E60]">Innovate</span>, &thinsp;
            <span className="text-[#001E60]">Solve</span>
          </div>
        </div>

        <div className="z-[10] w-[400px] mt-[30px] fadeInSlow mb-auto sm:w-[85vw]">
          <Image className="h-fit" src={HeaderLogo}></Image>
        </div>
      </div>

      <div className="z-[10] mt-[50px] flex justify-center items-center">
        <hr className="border-[1.5px] border-[#005596] w-[60px] mr-[20px] rounded-[30px] lr:mr-0 sm:w-0 sm:border-0 "></hr>
        <button
          className="py-[10px] px-[40px] bg-[#005596] font-[500] scale-[.75] sm:scale-[.80]
          text-white text-[20px] rounded-[20px] hover:drop-shadow-[0px_0px_0px_#001E60]
          hover:translate-y-1 duration-300 drop-shadow-[0px_8px_1px_#001E60]"
          onClick={scrollToWorkspace}>
          Click to Explore
        </button>
        <hr className="border-[1.5px] border-[#005596] w-[60px] ml-[20px] lr:ml-0 rounded-[30px] sm:w-0 sm:border-0"></hr>
      </div>

      <Image className="absolute object-cover top-0 right-0 left-0 w-full h-full bg-cover bg-no-repeat bg-fixed bg-center opacity-20 z-[-1]" src={Background}></Image>
    </div>
  );
}

export default HeaderMobile;
