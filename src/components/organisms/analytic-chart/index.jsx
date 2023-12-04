import { useSelector } from "react-redux";
import { BarChart, PieChart } from "@components/molecules";
import { useCharts } from "@shared/hooks";
import { PropTypes } from "prop-types";

export const AnalyticChart = ({ chartType, metric, labels = [], products }) => {
  const categories = useSelector(({ categories }) => categories);

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

  const { createBarData, createPieData } = useCharts();

  const dataCallbacks = {
    bar: createBarData,
    pie: createPieData,
  };

  const charts = {
    bar: (
      <BarChart
        options={options}
        data={dataCallbacks.bar(products, metric, labels)}
      />
    ),
    pie: <PieChart data={dataCallbacks.pie(products, categories, metric)} />,
  };

  return charts[chartType];
};

AnalyticChart.propTypes = {
  chartType: PropTypes.string.isRequired,
  metric: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string),
  products: PropTypes.arrayOf(PropTypes.object),
};
