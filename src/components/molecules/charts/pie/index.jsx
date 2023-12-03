import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { PropTypes } from "prop-types";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = ({ data }) => <Pie data={data} />;

PieChart.propTypes = {
  data: PropTypes.object,
};
