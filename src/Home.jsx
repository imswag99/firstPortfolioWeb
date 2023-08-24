import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./components/Context";
import Services from "./Services";

const Home = () => {

  const {updateHome} = useGlobalContext();

  useEffect(() => updateHome(), []);

  return (
      <>
        <HeroSection btnBg={({ theme }) => theme.colors.btn} />
        <h1 style={{fontSize: "3rem", textAlign: "center"}}>OUR SERVICES</h1>
        <Services />
      </>
  )
}

export default Home;