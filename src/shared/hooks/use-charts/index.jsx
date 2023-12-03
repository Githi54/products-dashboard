import { useSelector } from "react-redux";

export const useCharts = () => {
  const { products } = useSelector((state) => state);
  const createBarData = () => ({
    labels: ["Revenue"],
    datasets: products.map(({ name, revenue }) => ({
      label: name,
      data: [revenue],
      backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}, 0.5)`,
    })),
  });

  return { createBarData };
};
