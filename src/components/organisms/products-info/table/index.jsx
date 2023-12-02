import { Table } from "antd";
import { useTable } from "@shared/hooks";
import { useSelector } from "react-redux";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

export const ProductInfoTable = () => {
  const { createSortedColumn, createColumn, createFilteredColumn } = useTable();
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
    createColumn("Created at", "date"),
  ];
  // use binary search. Now we have only 3 categories, but this function for scaling
  const findCategoryByID = (categoryID) => {
    let min = 0;
    let max = categories.length;

    while (max >= min) {
      const mid = Math.floor((min + max) / 2);

      if (categories[mid].id === categoryID) {
        return categories[mid].name;
      }

      categories[mid].id > categoryID ? (max = mid - 1) : (min = mid + 1);
    }

    return "Unknown";
  };
  const data = products.map(
    ({ name, revenue, unitSold, categoryID, profitMargins, date }) => ({
      name,
      revenue,
      unitSold,
      category: findCategoryByID(categoryID),
      profitMargins: Math.floor(profitMargins * 100),
      date,
    })
  );

  return (
    <Table
      columns={columns}
      pagination={false}
      dataSource={data}
      onChange={onChange}
    />
  );
};
