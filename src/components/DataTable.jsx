import React from "react";
import { Table } from "antd";
import "./DataTable.css"; // import CSS riêng

function DataTable({ apiData }) {
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Họ và Tên", dataIndex: "fullname", key: "fullname" },
    { title: "Email", dataIndex: "email", key: "email" },
  ];

  return (
    <Table
      columns={columns}
      dataSource={apiData}
      rowKey="id"
      pagination={{ pageSize: 5 }}
      className="custom-table" // gắn class riêng để override
    />
  );
}

export default DataTable;
