import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

export default function ScreenDashboard() {
  return (
    <>
      <div className="w-100 h-100">
        <Header/>
      </div>
      <div className="w-25 h-100">
        <Sidebar/>
      </div>
    </>
  );
}
