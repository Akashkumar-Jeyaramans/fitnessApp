import React from "react";
import "antd/dist/antd.css";
import { Breadcrumb, Layout } from "antd";
import { Footers } from "./Footer";
import { Headers } from "./Header";
const { Header, Content, Footer } = Layout;
const data ="Akash"
export const MainLayout = () => (
  <Layout className="layout">
    <Header>
      <Headers data={data}/>
    </Header>
    <Content
      style={{
        padding: "0 50px"
      }}
    >
      <Breadcrumb
        style={{
          margin: "16px 0"
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer
      style={{
        textAlign: "center"
      }}
    >
     <Footers />
    </Footer>
  </Layout>
);




