import { useSelector } from "react-redux";
import { BarChart } from "@components/molecules";
import { faker } from "@faker-js/faker";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


export const AnalyticChart = () => {
  const chartType = useSelector(({ chartType }) => chartType);
  const charts = {
    bar: <BarChart options={options} data={data} />,
  };

  return <>{charts[chartType]}</>;
};
