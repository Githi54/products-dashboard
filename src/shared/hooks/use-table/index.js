export const useTable = () => {
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

  return { createColumn, createSortedColumn, createFilteredColumn };
};
