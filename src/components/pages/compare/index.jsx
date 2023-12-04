import { useState } from "react";
import { AnalyticChart } from "@components/organisms";
import { Layout } from "@components/templates";
import { Flex, Select } from "antd";
import { useSelector } from "react-redux";

export const ComparePage = () => {
  const products = useSelector(({ products }) => products);
  const selectOptions = products.map(({ name }) => ({
    value: name,
    label: name,
  }));
  const [leftSelectProduct, setLeftSelectProduct] = useState(products[0]);
  const [rightSelectProduct, setRightSelectProduct] = useState(products[1]);
  const findProductByName = (productName) =>
    products.find(({ name }) => productName === name);

  return (
    <Layout>
      <Flex vertical gap="middle">
        <Flex gap="middle">
          <Select
            size="small"
            defaultValue={products[0].name}
            style={{ width: "150px" }}
            onChange={(value) => setLeftSelectProduct(findProductByName(value))}
            options={selectOptions}
          />
          <Select
            size="small"
            style={{ width: "150px" }}
            defaultValue={products[1].name}
            onChange={(value) =>
              setRightSelectProduct(findProductByName(value))
            }
            options={selectOptions}
          />
        </Flex>
        <Flex gap="middle">
          <AnalyticChart
            chartType="bar"
            metric="revenue"
            labels={["Revenue"]}
            products={[leftSelectProduct, rightSelectProduct]}
          />
          <AnalyticChart
            chartType="bar"
            metric="unitSold"
            labels={["Unit sold"]}
            products={[leftSelectProduct, rightSelectProduct]}
          />
          <AnalyticChart
            chartType="bar"
            metric="profitMargins"
            labels={["Profit margin"]}
            products={[leftSelectProduct, rightSelectProduct]}
          />
        </Flex>
      </Flex>
    </Layout>
  );
};
