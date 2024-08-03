import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Header from "../pages/shared/Header";

const Root: React.FC = () => {
  return (
    <main>
      <Header />
      {/* header  */}
      <Outlet />
      {/* footer  */}
      <Footer />
    </main>
  );
};

export default Root;
