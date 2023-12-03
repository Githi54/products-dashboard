import { useSelector } from "react-redux";
import { BarChart } from "@components/molecules";
import { useCharts } from "@shared/hooks";
import { PropTypes } from "prop-types";

export const AnalyticChart = ({ chartType }) => {
  const products = useSelector((state) => state.products);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "December statistic",
      },
    },
  };

  const { createBarData } = useCharts();

  const data = createBarData(products);

  const charts = {
    bar: <BarChart options={options} data={data} />,
    pie: <div>Lalalala</div>,
  };

  return <>{charts[chartType]}</>;
};

AnalyticChart.propTypes = {
  chartType: PropTypes.string,
};
