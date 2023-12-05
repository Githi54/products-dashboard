import { Layout } from "@components/templates";
import { Card } from "antd";

export const HomePage = () => (
  <Layout>
    <Card title="📊Welcome to our analytics platform!" bordered={false}>
      <p>
        In this application, you will be able to view analytics on your products
        for this month
      </p>
      <p>Happy exploring!🌟</p>
    </Card>
  </Layout>
);
