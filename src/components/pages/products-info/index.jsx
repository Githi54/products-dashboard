import { Layout } from "@components/templates";
import { ProductInfoTable } from "@components/organisms";
import { CSVLink } from "react-csv";
import { Flex } from "antd";
import { useTable } from "@shared/hooks";
import { useSelector } from "react-redux";

export const ProductsInfoPage = () => {
  const { products, categories } = useSelector(({ products, categories }) => ({
    products,
    categories,
  }));
  const { createCSVTableData, createCSVHeader } = useTable();
  const csvData = products.map((product) =>
    createCSVTableData(product, categories)
  );
  const csvHeaders = [
    createCSVHeader("Name", "name"),
    createCSVHeader("Category", "category"),
    createCSVHeader("Revenue, $", "revenue"),
    createCSVHeader("Unit sold", "unitSold"),
    createCSVHeader("Profit margins, %", "profitMargins"),
    createCSVHeader("Created at", "date"),
  ];

  return (
    <Layout>
      <Flex
        vertical
        align="flex-end"
        gap="middle"
        style={{ paddingTop: "10px" }}
      >
        <CSVLink data={csvData} headers={csvHeaders} filename="product_info">
          Download full info
        </CSVLink>
        <ProductInfoTable products={products} categories={categories} />
      </Flex>
    </Layout>
  );
};
