import { Layout } from "@components/templates";
import { AnalyticChart } from "@components/organisms";
import { Flex, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changeChartType } from "@app/redux/features";

export const AnalyticsPage = () => {
  const chartType = useSelector(({ chartType }) => chartType);
  const products = useSelector(({ products }) => products);
  const dispatch = useDispatch();
  const onChangeSelect = (value) => {
    dispatch(changeChartType(value));
  };

  const metrics = {
    bar: "revenue",
    pie: "unitSold",
  };

  return (
    <Layout>
      <Flex vertical gap="middle" style={{ width: "90%", paddingTop: "10px" }}>
        <Select
          size="small"
          defaultValue={chartType}
          style={{ width: "150px" }}
          onChange={onChangeSelect}
          options={[
            {
              value: "bar",
              label: "Products statistic",
            },
            {
              value: "pie",
              label: "Category statistic",
            },
          ]}
        />
        <AnalyticChart
          products={products}
          chartType={chartType}
          metric={metrics[chartType]}
          labels={["Revenue"]}
        />
      </Flex>
    </Layout>
  );
};
