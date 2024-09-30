import React from "react";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import { useAmp } from "next/amp";

export const metadata = {
  title: "HomePage",
};
const HomePage = () => {
  useAmp;
  return (
    <>
      <Hero />
      <InfoBoxes />
    </>
  );
};

export default HomePage;
