import { useSelector } from "react-redux";
import { BarChart } from "@components/molecules";
import { useCharts } from "@shared/hooks";

export const AnalyticChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const { createBarData } = useCharts();

  const data = createBarData();

  console.log(data);

  const chartType = useSelector(({ chartType }) => chartType);
  const charts = {
    bar: <BarChart options={options} data={data} />,
  };

  return <>{charts[chartType]}</>;
};
