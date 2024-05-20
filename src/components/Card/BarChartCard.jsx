// import React from "react";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";
// // import { Bar, Line } from "react-chart.js";


// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend
// );

// function BarChartCard() {
//   const labels = ["Jan", "Feb", "Mar", "Apr", "May"];

//   const data = {
//     labels,
//     datasets: [
//       {
//         // label: '0, 200, 400, 600, 800, 1000',
//         data: [0, 200, 400, 600, 800, 1000],
//         backgroundColor: "transparent",
//         borderColor: "#5F2EEA",
//         pointBorderColor: "transparent",
//         pointBorderWidth: 4,
//         tension: 0.5,
//       },
//     ],
//   };
//   const options = {
//     plugins: {
//       legend: false,
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//       y: {
//         min: 0,
//         max: 100,
//         ticks: {
//           stepSize: 200,
//         },
//         grid: {
//           borderDash: [10],
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       <Bar data={data} options={options}></Bar>
//     </div>
//   );
// }

// export default BarChartCard;
