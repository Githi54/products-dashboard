export const useCharts = () => {
  const getRandomRGBItem = () => Math.floor(Math.random() * 255);
  const getRandomRGB = () => `rgb(${getRandomRGBItem()}, ${getRandomRGBItem()}, ${getRandomRGBItem()})`;
  const createBarData = (products) => ({
    labels: ["Revenue"],
    datasets: products.map(({ name, revenue }) => ({
      label: name,
      data: [revenue],
      backgroundColor: getRandomRGB(),
    })),
  });

  const calculateTotalUnitSold = (products, categoryId) => {
    return products
      .filter(product => product.categoryID === categoryId)
      .reduce((total, product) => total + Number(product.unitSold), 0);
  };

  const createPieData = (products, categories) => {
    const categoryLabels = categories.map(category => category.name);
  
    const pieDataset = {
      label: "Unit sold",
      data: categories.map(category => calculateTotalUnitSold(products, category.id)),
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
