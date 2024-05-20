import React from "react";
import "../../App.css";

import Support from "../../Assets/WallXSidebarIcons/supportWoman.svg";
import Notify from "../../Assets/WallXIcon/notification.svg";
import Toggle from "../../Assets/WallXIcon/icon-sun.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import FeatureCard from "../Card/FeatureCard";
import pending from "../../Assets/WallXIcon/Pending-Request.svg";
import ValuationImg from "../../Assets/WallXIcon/ValuationIcon.svg";
import Approved from "../../Assets/WallXIcon/Approved-Req.svg";
import TotalAgents from "../../Assets/WallXIcon/Total-Agents.svg";
import TotalUsers from "../../Assets/WallXIcon/Total-users.svg";
import RequestCard from "../Card/RequestCard";
import StatisticCard from "../Card/StatisticCard";

function DashboardView() {
  return (
    <div className="dashboard__Container">
      {/* Nav bar */}
      <div className="navbar__content">
        <div className="content__right">
          {/* Dashboard Text */}
          <h2>Dashboard</h2>
        </div>
        <div className="content__left">
          <div className="searchBar">
            {/* Search Bar */}
            <SearchIcon color="grey" fontSize="small" />
            <input
              type="text"
              className="searchInput"
              placeholder="Enter Something ..."
            />
          </div>
          <div className="language">
            {/* Language En  */}
            <p>EN</p>
            <KeyboardArrowDownIcon color="grey" fontSize="small" />
          </div>
          <div className="toggle">
            {/* Toggle dark mode*/}
            <img src={Toggle} alt="" />
          </div>
          <div className="notifications">
            {/* notifications */}
            <img src={Notify} alt="" />
          </div>
          <div className="user__profile">
            {/* User Profile */}
            <img src={Support} alt="" />
          </div>
        </div>
      </div>

      {/* Feature Card */}
      <div className="dashboard__feature">
        <FeatureCard
          image={pending}
          amount="1478 286"
          requestType="Pending Requests"
          valuationImg={ValuationImg}
          valuation="4.07%"
          date="Last month"
        />
        <FeatureCard
          image={Approved}
          amount="478 520"
          requestType="Approved Requests"
          valuationImg={ValuationImg}
          valuation="0.24%"
          date="Last month"
        />
        <FeatureCard
          image={TotalAgents}
          amount="154 872"
          requestType="Total Agents"
          valuationImg={ValuationImg}
          valuation="1.64%"
          date="Last month"
        />
        <FeatureCard
          image={TotalUsers}
          amount="167"
          requestType="Total Users"
          valuationImg={ValuationImg}
          valuation="0.00%"
          date="Last month"
        />
      </div>

      {/* User Inflow Statistics */}
      <div className="userStatistic">
        <StatisticCard />
      </div>
      {/* Recent Requests */}
      {/* <div className="recentRequest">
        <RequestCard />
      </div> */}
    </div>
  );
}

export default DashboardView;
