import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { PropTypes } from "prop-types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = ({ options, data }) => (<Bar options={options} data={data} />);
  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: "top",
  //     },
  //     title: {
  //       display: true,
  //       text: "December statistic",
  //     },
  //   },
  // };

  // const labels = ["Revenue", "Unit sold", "Profit margin"];

  // const barData = {
  //   labels,
  //   datasets: [
  //     {
  //       label: "Dataset 1",
  //       data: [],
  //       backgroundColor: "rgba(255, 99, 132, 0.5)",
  //     },
  //     {
  //       label: "Dataset 2",
  //       data: [],
  //       backgroundColor: "rgba(53, 162, 235, 0.5)",
  //     },
  //   ],
  // };


BarChart.propTypes = {
  options: PropTypes.object,
  data: PropTypes.object,
};
