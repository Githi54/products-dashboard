import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FundViewOutlined,
  FrownOutlined,
} from "@ant-design/icons";
import { useMenu } from "@shared/hooks";
import { Routes } from "@shared/constants";
import { useNavigate } from "react-router";

const { Sider } = Layout;

export const MenuSidebar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  const { getMenuItem } = useMenu();
  const items = [
    getMenuItem("Products info", Routes.PRODUCTS_INFO, <DesktopOutlined />),
    getMenuItem("Analytics", Routes.ANALYTICS, <PieChartOutlined />),
    getMenuItem(
      "Compare products metrics",
      Routes.COMPARE,
      <FundViewOutlined />
    ),
    getMenuItem("404", "/blablabla", <FrownOutlined />),
  ];

  const handleClickMenuItem = (event) => navigate(event.key);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        items={items}
        onClick={handleClickMenuItem}
      />
    </Sider>
  );
};
