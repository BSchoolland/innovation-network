import React, { Component, useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Title from "../components/title";
import Centers from "../components/centers";

function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

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
    <div>
      {isMobile ? <></> : <Title></Title>}
      <Navbar></Navbar>
      <Header></Header>
      <Centers></Centers>
    </div>
  );
}

export default HomePage;
