import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./components/Context";

const About = () => {

  const {updateAbout} = useGlobalContext();

  useEffect(() => updateAbout(), []);

  return (
    <>
      <HeroSection btnBg={({ theme }) => theme.colors.border} />
    </>
  )
}

export default About;