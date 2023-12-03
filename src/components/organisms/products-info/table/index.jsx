import { Table } from "antd";
import { useTable, useProcessData } from "@shared/hooks";
import { useSelector } from "react-redux";

export const ProductInfoTable = () => {
  const { createSortedColumn, createColumn, createFilteredColumn } = useTable();
  const { findCategoryByID } = useProcessData();
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

  const data = products.map(
    ({ name, revenue, unitSold, categoryID, profitMargins, id, date }) => ({
      key: id,
      name,
      revenue,
      unitSold,
      category: findCategoryByID(categoryID, categories),
      profitMargins: Math.floor(profitMargins * 100),
      date: date.toString().slice(4, 21)
    })
  );

  return (
    <Table
      columns={columns}
      pagination={false}
      dataSource={data}
    />
  );
};
