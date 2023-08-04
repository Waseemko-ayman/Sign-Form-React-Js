import React from "react";
import "./style.css";
import Header from "../Header";
import Sidebar from "../Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="main__layout">
      <div className="left-side">
        <Sidebar />
      </div>
      <div className="right-side">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
