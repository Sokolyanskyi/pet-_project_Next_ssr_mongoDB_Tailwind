import React from "react";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
export const metadata = {
  title: "HomePage",
};
const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
};

export default HomePage;

// mongodb+srv://Sok:<db_password>@next-app.7znk3.mongodb.net/?retryWrites=true&w=majority&appName=next-app
