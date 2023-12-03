export const useCharts = () => {
  const createBarData = (products) => ({
    labels: ["Revenue"],
    datasets: products.map(({ name, revenue }) => ({
      label: name,
      data: [revenue],
      backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`,
    })),
  });

  return { createBarData };
};
