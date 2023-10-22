import React, { Component, useState, useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import HeaderMobile from "../components/header-mobile";
import Title from "../components/title";
import Centers from "../components/centers";

function HomePage() {

  const [isMobile, setIsMobile] = useState(false);

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
    <div>
      {isMobile ? <></> : <Title></Title> }
      <Navbar></Navbar>
      {isMobile ? <HeaderMobile></HeaderMobile> : <Header></Header> }
      <Centers></Centers>
    </div>
  );
}

export default HomePage;
