import React, { Component, useState, useEffect } from "react";
import mjclogo from "../public/images/mjclogo.png";
import mjclogoMOBILE from "../public/images/mjclogoWHITE.png";

function Navbar() {

  const [isMobile, setIsMobile] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const NavItem = ({ text }) => (
    <li className="mx-[18px] hover:text-[#001E60] duration-200">{text}</li>
  );

  const MobileNavItem = ({ text }) => <li className="mt-[40px]">{text}</li>;

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setIsMobile(window.innerWidth <= 850);
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
        <div className="relative">
          <div
            className={`fixed inset-0 z-50 fadeInFast ${
              overlayVisible ? "bg-[#001E60] bg-opacity-[95%]" : "hidden"
            }`}
            onClick={(e) => {
              if (e.target.classList.contains("fa-bars")) {
                handleIconClick();
              }
            }}
          >
            <ul className="text-center mt-[100px] text-white text-[20px] font-[500] cursor-pointer">
              <MobileNavItem text="Home" />
              <MobileNavItem text="Partners" />
              <MobileNavItem text="Equipment" />
              <MobileNavItem text="Projects" />
              <MobileNavItem text="About Us" />
            </ul>
          </div>
          <div className="flex justify-between items-center px-4 py-3 bg-[#001E60] text-white relative z-50">
            <a className="cursor-pointer z-[10]" href="https://www.mjc.edu/" target="_blank">
              <img className="w-24" src={mjclogoMOBILE} />
            </a>

            {overlayVisible ? (
              <i
                className="fa-solid fa-xmark text-3xl cursor-pointer"
                onClick={() => setOverlayVisible(!overlayVisible)}
              ></i>
            ) : (
              <i
                className="fa-solid fa-bars text-3xl cursor-pointer"
                onClick={() => setOverlayVisible(!overlayVisible)}
              ></i>
            )}
          </div>
        </div>
      ) : (
        <nav
          className="flex justify-between px-[60px] bg-transparent z-[10]
      xxlr:px-[50px] xlr:px-[40px]"
        >
          <a className="cursor-pointer z-[10]" href="https://www.mjc.edu/" target="_blank">
            <img
              className="w-[160px] pt-[30px] cursor-pointer xlr:w-[160px]"
              src={mjclogo}
            ></img>
          </a>
          <ul
            className="flex justify-end items-center text-[16px]
        text-[#005596] font-[500] cursor-pointer z-[10] pb-[10px]
        xlr:text-[14px]"
          >
            <NavItem text="Home" />
            <NavItem text="Partners" />
            <NavItem text="Equipment" />
            <NavItem text="Projects" />
            <NavItem text="About Us" />
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navbar;
