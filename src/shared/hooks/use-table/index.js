import { useProcessData } from "@shared/hooks";

export const useTable = () => {
  const { findCategoryByID } = useProcessData();

  const createColumn = (title, dataIndex) => ({
    title,
    dataIndex,
  });

  const createSortedColumn = (title, dataIndex, multiple) => {
    const column = createColumn(title, dataIndex);

    column.sorter = {
      compare: (a, b) => a[dataIndex] - b[dataIndex],
      multiple,
    };

    return column;
  };

  const createFilteredColumn = (title, dataIndex, filters) => {
    const column = createColumn(title, dataIndex);

    column.filters = filters;
    column.onFilter = (value, record) => record[dataIndex].startsWith(value);
    column.filterSearch = true;

    return column;
  };

  const createCSVTableData = (product, categories) => {
    const { name, revenue, unitSold, categoryID, profitMargins, date } =
      product;

    return {
      name,
      revenue,
      unitSold,
      category: findCategoryByID(categoryID, categories),
      profitMargins: Math.floor(profitMargins * 100),
      date: date.toString().slice(4, 21),
    };
  };

  const createTableData = (product, categories) => {
    const data = createCSVTableData(product, categories);

    data.key = product.id;

    return data;
  };

  return {
    createColumn,
    createSortedColumn,
    createFilteredColumn,
    createTableData,
    createCSVTableData,
  };
};
