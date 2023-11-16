import React from "react";
import Sidebar from "./../_components/Sidebar";

const Homelayout = ({ children }) => {
  return (
    <div>
      <div className="h-full w-64 md:flex flex-col fixed inset-y-0 z-50 ">
        <Sidebar />
      </div>

      {children}
    </div>
  );
};

export default Homelayout;
