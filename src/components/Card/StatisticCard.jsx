import React from "react";
import "../../App.css";
// import type { ChartData, ChartArea } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Chart, Line } from "react-chartjs-2";
import faker from "faker";
// import { Bar, Doughnut, Line } from "chart.js/auto";

import blueBadge from "../../Assets/WallXIcon/badgeblue.svg";
import greenBadge from "../../Assets/WallXIcon/badgeGreen.svg";
import BarChartCard from "./BarChartCard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const StatisticCard = () => {
  const labels = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "June"];
  const labels2 = ["Jan", "Feb", "Mar", "Apr", "May"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 25, max: 100 })),
        backgroundColor: "transparent",
        borderColor: "#5F2EEA",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5,
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: 25, max: 100 })),
        backgroundColor: "transparent",
        borderColor: "#4BDE97",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  const data2 = {
    labels: labels2,
    datasets: [
      {
        // label: '0, 200, 400, 600, 800, 1000',
        data: [0, 200, 400, 600, 800, 1000],
        backgroundColor: "transparent",
        borderColor: "#5F2EEA",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  };
  const options2 = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 200,
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <div className="statCard">
      <div className="statCard-left">
        <div className="statContainer">
          <div className="inflow-stat-left">
            <h3>User Inflow Statistics</h3>
            <span>Nov - July</span>
          </div>
          <div className="inflow-stat-right">
            <div className="agents">
              <img src={blueBadge} alt="" /> &nbsp;Agents
              <p
                style={{
                  color: "#171717",
                  fontWeight: "500",
                  fontSize: "15px",
                }}
              >
                475 273
              </p>
            </div>
            <div className="users">
              <img src={greenBadge} alt="" /> &nbsp; Users
              <p
                style={{
                  color: "#171717",
                  fontWeight: "500",
                  fontSize: "15px",
                }}
              >
                782 396
              </p>
            </div>
          </div>
        </div>
        {/* lineChart */}
        <div
          className="lineChart"
          style={{ width: "900px", height: "500px", marginLeft: "20px" }}
        >
          <Line id="canvas" data={data} options={options}></Line>
        </div>
      </div>
      <div className="statCard-right">
        <div className="startCard-container">
          {/* Bar */}
          <div className="barchart">
            {/* <BarChartCard /> */}
            {/* <Bar data={data2} options={options2}></Bar> */}
          </div>
          {/* bar user */}
          <div className="bar-user">
            <p className="new-user">New Users</p>
            <p className="last-week">
              (+23%) <span>than last week</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticCard;
