import PropTypes from "prop-types";
import { Layout as AntLayout, Spin } from "antd";
import { MenuSidebar } from "@components/molecules";
import { useState } from "react";
const { Content, Footer } = AntLayout;

export const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => setIsLoading(false), 500);

  return (
    <AntLayout
      style={{
        minHeight: "100vh",
      }}
    >
      <MenuSidebar />
      <AntLayout>
        <Content
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isLoading ? (<Spin />) : children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          ©2023 Created by Mykyta Havryliuk
        </Footer>
      </AntLayout>
    </AntLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
