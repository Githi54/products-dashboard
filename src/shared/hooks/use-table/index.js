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

  const createTableData = (product, categories) => {
    const { name, revenue, unitSold, categoryID, profitMargins, date, id } =
      product;

    return {
      key: id,
      name,
      revenue,
      unitSold,
      category: findCategoryByID(categoryID, categories),
      profitMargins: Math.floor(profitMargins * 100),
      date: date.toString().slice(4, 21),
    };
  };

  const createCSVTableData = (product, categories) => {
    const data = createTableData(product, categories);

    delete data.key;

    return data;
  };

  const createCSVHeader = (label, key) => ({ label, key });

  return {
    createColumn,
    createSortedColumn,
    createFilteredColumn,
    createTableData,
    createCSVTableData,
    createCSVHeader,
  };
};
