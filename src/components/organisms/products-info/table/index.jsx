import { Table } from "antd";
import { useTable } from "@shared/hooks";
import { useSelector } from "react-redux";

export const ProductInfoTable = () => {
  const { createSortedColumn, createColumn, createFilteredColumn, createTableData } = useTable();
  const categories = useSelector(({ categories }) => categories);
  const products = useSelector(({ products }) => products);
  const categoryFilters = categories.map(({ name }) => ({
    text: name,
    value: name,
  }));
  const columns = [
    createColumn("Name", "name"),
    createFilteredColumn("Category", "category", categoryFilters),
    createSortedColumn("Revenue, $", "revenue", 1),
    createSortedColumn("Unit sold", "unitSold", 3),
    createSortedColumn("Profit margins, %", "profitMargins", 2),
    createColumn("Created at", "date")
  ];

  const data = products.map(product => createTableData(product, categories));

  return (
    <Table
      columns={columns}
      pagination={false}
      dataSource={data}
    />
  );
};
