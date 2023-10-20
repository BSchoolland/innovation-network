import React, { Component, useState, useEffect } from "react";
import CostumePic from "../public/images/costume.jpg"
import AudioPic from "../public/images/audio.jpg";
import WeldingPic from "../public/images/welding.jpg";
import EditingPic from "../public/images/editing.jpg";
import AgriculturePic from "../public/images/agriculture.jpg";
import SculpturePic from "../public/images/sculpture.jpg";

function Centers() {
  const Workspace = ({ text, image }) => (
    <div className="relative flex justify-center items-center flex-col w-[340px] mb-[80px]
    x3lr:mb-[60px] xxlr:mb-[40px] xlr:mb-[30px]
    x3lr:w-[320px] xxlr:w-[270px] xlr:w-[220px] lr:w-[240px] md:w-[180px] sm:w-[240px]">
      <h2 className="text-[40px] font-[500] text-[#005596] mb-[20px] text-center
      x3lr:text-[35px] xxlr:text-[30px] xlr:text-[25px] lr:text-[30px] md:text-[20px] sm:text-[28px]">
        {text}
      </h2>
      <div className="relative cursor-pointer hover:scale-[1.05] duration-300 ease-in-out">
        <img src={image} alt={text} />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center opacity-0
        bg-black hover:opacity-80 transition-opacity duration-300 ease-in-out"
        >
          <p className="text-white px-[20px] text-center">
            MJC has a brand new maker space, a collaborative area where people
            can create, invent, build, and test using traditional craft making
            methods and new-technology. Capabilities include 3D printing, laser
            cutting, vinyl printing, circuit building, and sewing. The space has
            supplies and tools for art and textile projects, comic creation, and
            prototyping.
          </p>
        </div>
      </div>
      <div className="text-[#005596] font-[500] text-center mt-[20px]">
        <p>Appointments ONLY</p>
        <p>Open from 8:30am - 5:30pm</p>
        <p>East Campus Founders Hall Room 235</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex justify-center items-center mt-[200px] flex-col">
        <h1 className="text-[4vw] font-[600] text-[#001E60] mb-[80px]">
          Visit Our Diverse Number of Workspaces
        </h1>
        <div className="flex items-end flex-wrap justify-around px-[80px] xxlr:px-[50px] 
        lr:px-[40px] gap-[40px]">
          <Workspace text="Theater Design" image={CostumePic}></Workspace>
          <Workspace text="Media Studio" image={AudioPic}></Workspace>
          <Workspace text="Welding Center" image={WeldingPic}></Workspace>
          <Workspace text="Magic Lab" image={EditingPic}></Workspace>
          <Workspace text="Ag Innovation" image={AgriculturePic}></Workspace>
          <Workspace text="Arts Center" image={SculpturePic}></Workspace>
        </div>
      </div>
    </>
  );
}

export default Centers;