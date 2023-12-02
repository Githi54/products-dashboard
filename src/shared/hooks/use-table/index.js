export const useTable = () => {
  const getColumn = (title, dataIndex) => ({
    title,
    dataIndex,
  });

  const getSortedColumn = (title, dataIndex, multiple) => {
    const column = getColumn(title, dataIndex)

    column.sorter = {
      compare: (a, b) => a[dataIndex] - b[dataIndex],
      multiple
    }

    return column
  };

  const getFilteredColumn = (title, dataIndex, filters) => {
    const column = getColumn(title, dataIndex)

    column.filters = filters
    column.onFilter = (value, record) => record.address.startsWith(value)
    column.onFilter = (value, record) => record.address.startsWith(value)
    column.filterSearch = true

    return column
  }

  return { getColumn, getSortedColumn, getFilteredColumn };
};
