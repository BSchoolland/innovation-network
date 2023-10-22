import React, { Component, useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <div
        className="bg-[#001E60] py-[60px] sm:pb-[80px] flex flex-col justify-center 
            text-center z-[10] mt-[100px] px-[20px]"
      >
        <h1 className="text-white font-[500] text-[19px] mb-[10px] lr:text-[17px] md:mb-[20px]">
          Website designed and developed by Adrean Cajigas and Benjamin Schoolland
        </h1>
        <i className="text-white font-[400] mb-[40px] lr:text-[14px] px-[10px]">
            Transforming your ideas into modern digital experiences
            </i>
        <div
          className="text-white font-[300] text-[14px] flex items-center 
                justify-center gap-[70px] md:flex-col md:gap-[20px]"
        >
          <div className="flex items-center justify-center gap-[10px]">
            <FontAwesomeIcon icon={faEnvelope} />
            <p> adrean.cajigas@gmail.com </p>
          </div>
          <div className="flex items-center justify-center gap-[10px]">
            <FontAwesomeIcon icon={faEnvelope} />
            <p> bschoolland@gmail.com </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
