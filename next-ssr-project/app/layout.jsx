import React from "react";
import "@/assets/styles/globals.css";
export const metadata = {
  title: "The best property for rent",
  description: "Find best property for rent",
  keywords: "property, rent, house, apartment, find",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
