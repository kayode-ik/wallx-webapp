import React from "react";
import SideBarOption from "../SideBarOption";
import "../../App.css";
import WallXLogo from "../../Assets/WallXSidebarIcons/WallX_logo.svg";
import Dashboard from "../../Assets/WallXSidebarIcons/Dashboard.svg";
import Request from "../../Assets/WallXSidebarIcons/Request.svg";
import Kyc from "../../Assets/WallXSidebarIcons/Kyc.svg";
import Report from "../../Assets/WallXSidebarIcons/Reports.svg";
import Audit from "../../Assets/WallXSidebarIcons/Audit Trail.svg";
import User from "../../Assets/WallXSidebarIcons/User.svg";
import Setting from "../../Assets/WallXSidebarIcons/Setting.svg";
import Support from "../../Assets/WallXSidebarIcons/supportWoman.svg"

function SidebarView({ image, title }) {
  return (
    <div className="sidebar__container">
      <div className="wallX__logo">
        {/* logo */}
        <img src={WallXLogo} alt="" />
      </div>
      <hr className="linethrough" />
      <div className="sidebar__options">
        <SideBarOption image={Dashboard} title="Dashboard" />
        <SideBarOption image={Request} title="Request" />
        <SideBarOption image={Kyc} title="Kyc" />
        <SideBarOption image={Report} title="Report" />
        <SideBarOption image={Audit} title="Audit Trail" />
        <SideBarOption image={User} title="User" />
        <SideBarOption image={Setting} title="Setting" />
      </div>

      {/* support manager */}
      <div className="sidebar__support">
        {/* image */}
        <img src={Support} alt="" />
        <div className="textTitle">
          <span className="support-text1">Nafisa Sh.</span> <br />
          <span className="support-text2">Support manager.</span>
        </div>
      </div>
    </div>
  );
}

export default SidebarView;
