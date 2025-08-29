import React from "react";
import { Table } from "antd";
import "./DataTable.css"; // import CSS riêng

function DataTable({ apiData }) {
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Họ và Tên", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Tuổi", dataIndex: "age", key: "age", sorter: (a, b) => a.age - b.age },
    { title: "Địa chỉ", dataIndex: "address", key: "address" },
    { title: "Ngày sinh", dataIndex: "dob", key: "dob" },
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
