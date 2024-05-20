import React from "react";
import '../../App.css'

const SideBarOption = ({ image, title }) => {
  return (
    <div className="sidebarOption__Container">
      <div className="sidebar__logoText">
        {/* logo */}
        <img src={image} alt="" />
        {/* text */}
        <p>{title}</p>
      </div>
      
    </div>
  );
};

export default SideBarOption;
