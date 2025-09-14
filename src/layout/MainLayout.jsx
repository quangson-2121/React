import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useLocation } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

// Map route -> label + icon
const routeNameMap = {
  "/dashboard": { label: "Dashboard", icon: <DashboardOutlined /> },
  "/users": { label: "User Management", icon: <UserOutlined /> },
};

const MainLayout = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const breadcrumbItems = [
    {
      title: (
        <span>
          <HomeOutlined /> <Link to="/">Trang chủ</Link>
        </span>
      ),
      key: "home",
    },
    ...pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      const route = routeNameMap[url];
      return {
        title: route ? (
          <span>
            {route.icon} <Link to={url}>{route.label}</Link>
          </span>
        ) : (
          url
        ),
        key: url,
      };
    }),
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* MENU BÊN TRÁI */}
      <Sider collapsible>
        <div
          className="logo"
          style={{ color: "white", padding: "16px", fontWeight: "bold" }}
        >
          My App
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["/dashboard"]}>
          <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="/users" icon={<UserOutlined />}>
            <Link to="/users">User Management</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      {/* BÊN PHẢI */}
      <Layout>
        {/* HEADER */}
        <Header style={{ background: "#fff", padding: 0 }}>
          <h2 style={{ marginLeft: "20px" }}>Quản trị hệ thống</h2>
        </Header>

        {/* BREADCRUMB động */}
        <Breadcrumb
          items={breadcrumbItems}
          style={{
            margin: "16px",
            fontSize: "15px",
          }}
        />

        {/* NỘI DUNG */}
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              padding: 24,
              background: "#fff",
              minHeight: 360,
              borderRadius: 8,
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <Outlet />
          </div>
        </Content>

        {/* FOOTER */}
        <Footer style={{ textAlign: "center" }}>
          ©2025 Created by You 🚀
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
