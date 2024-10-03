import React from "react";
/* eslint-disable react/prop-types */
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
export const metadata = {
  title: "The best property for rent",
  description: "Find best property for rent",
  keywords: "property, rent, house, apartment, find",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />{" "}
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
