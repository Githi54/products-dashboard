export const useCharts = () => {
  const getRandomRGBItem = () => Math.floor(Math.random() * 255);
  const getRandomRGB = () => `rgb(${getRandomRGBItem()}, ${getRandomRGBItem()}, ${getRandomRGBItem()})`;
  const createBarData = (products, metric, labels) => ({
    labels,
    datasets: products.map(product => ({
      label: product.name,
      data: [product[metric]],
      backgroundColor: getRandomRGB(),
    })),
  });

  const calculateTotalMetric = (products, categoryId, metric) => {
    return products
      .filter(product => product.categoryID === categoryId)
      .reduce((total, product) => total + Number(product[metric]), 0);
  };

  const createPieData = (products, categories, metric) => {
    const categoryLabels = categories.map(category => category.name);
  
    const pieDataset = {
      label: "Unit sold",
      data: categories.map(category => calculateTotalMetric(products, category.id, metric)),
      backgroundColor: categories.map(() => getRandomRGB()),
      borderWidth: 1,
    };
  
    return {
      labels: categoryLabels,
      datasets: [pieDataset],
    };
  };

  return { createBarData, createPieData };
};
