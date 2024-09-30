import React from "react";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "The best property for rent",
  description: "Find best property for rent",
  keywords: "property, rent, house, apartment, find",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />{" "}
      </body>
    </html>
  );
};

export default MainLayout;
