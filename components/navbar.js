import React, { Component, useState, useEffect } from "react";
import mjclogo from "../public/images/mjclogo.png";
import mjclogoMOBILE from "../public/images/mjclogoWHITE.png";
import InnovationLogoMobile from "../public/images/innovationlogomobile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";

function Navbar() {

  const [isMobile, setIsMobile] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const NavItem = ({ text, link }) => (
    <a href={link} target="_blank">
      <li className="mx-[18px] hover:text-[#001E60] duration-200">{text}</li>
    </a>
  );

  const MobileNavItem = ({ text, link }) =>(
    <a href={link} target="_blank">
      <li className="mt-[40px]">{text}</li>
    </a>
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setIsMobile(window.innerWidth <= 700);
      }

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);


  return (
    <>
    {isMobile ? (
        <div className="fixed top-0 w-full z-50">
          <Image
                className="w-[100px] absolute bottom-[20px] top-0 left-[50%] translate-x-[-50%] 
                z-[51] sm:w-[80px] sm:top-2"
                src={InnovationLogoMobile}
          ></Image>
          <div
            className={`fixed inset-0 z-50 fadeInFast ${
              overlayVisible ? "bg-[#001E60] bg-opacity-[95%]" : "hidden"
            }`}
            onClick={(e) => {
              if (e.target.classList.contains("faBars")) {
                handleIconClick();
              }
            }}
          >
            <ul className="text-center mt-[120px] text-white text-[20px] font-[500] cursor-pointer">
              <MobileNavItem text="Watch Our Video" link="https://youtu.be/XaOxtQ_Wgeg?si=7Y4FpfW_xOh3b6Qc" />
              <MobileNavItem text="Learn More About Us" link="https://mjc.edu/schools/sm/innovationcenter/aboutus.php"/>
            </ul>
          </div>
          <div className="flex justify-between items-center px-4 py-3 bg-[#001E60] text-white relative z-50">
            <a className="cursor-pointer z-[10]" href="https://www.mjc.edu/" target="_blank">
              <Image className="w-[100px] xsm:w-[80px]" src={mjclogoMOBILE}></Image>
            </a>

            {overlayVisible ? (
              <FontAwesomeIcon icon={faXmark} className="cursor-pointer text-3xl sm:text-2xl mr-2 sm:mr-1"
              onClick={() => setOverlayVisible(!overlayVisible)} />
            ) : (
              <FontAwesomeIcon icon={faBars} className="cursor-pointer text-3xl sm:text-2xl mr-2 sm:mr-1" 
              onClick={() => setOverlayVisible(!overlayVisible)} />
            )}
          </div>
        </div>
      ) : (
        <nav
          className="flex justify-between px-[60px] bg-transparent z-[10]
      xxlr:px-[50px] xlr:px-[40px] lr:px-[30px] mr-auto ml-auto max-w-[1800px]"
        >
          <a className="cursor-pointer z-[10]" href="https://www.mjc.edu/" target="_blank">
            <Image
              className="w-[160px] pt-[30px] cursor-pointer xlr:w-[160px]"
              src={mjclogo}
            ></Image>
          </a>
          <ul
            className="flex justify-end items-center text-[16px]
        text-[#005596] font-[500] cursor-pointer z-[10] pb-[10px]
        xlr:text-[14px]"
          >
            <NavItem text="Watch Our Video" link="https://youtu.be/XaOxtQ_Wgeg?si=7Y4FpfW_xOh3b6Qc" />
            <NavItem text="Learn More About Us" link="https://mjc.edu/schools/sm/innovationcenter/aboutus.php"/>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navbar;
