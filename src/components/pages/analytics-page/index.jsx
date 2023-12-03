import { Layout } from "@components/templates";
import { AnalyticChart } from "@components/organisms";
import { Flex, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changeChartType } from "@app/redux/features";

export const AnalyticsPage = () => {
  const chartType = useSelector(({ chartType }) => chartType);
  const dispatch = useDispatch();
  const onChangeSelect = (value) => {
    dispatch(changeChartType(value));
  };

  console.log(chartType)

  return (
    <Layout>
      <Flex vertical gap="middle" style={{ width: "90%", paddingTop: "10px" }}>
        <Select
          size="small"
          defaultValue="bar"
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
        <AnalyticChart chartType={chartType} />
      </Flex>
    </Layout>
  );
};
