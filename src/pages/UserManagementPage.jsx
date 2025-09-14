// src/pages/UserManagementPage.js
import React, { useState } from "react";
import { Table, Button, Modal, Form, Input } from "antd";
import { useAuth } from "../context/AuthContext";

function UserManagementPage() {
  const { users, addUser, updateUser, deleteUser } = useAuth();
  const [editingUser, setEditingUser] = useState(null);
  const [visible, setVisible] = useState(false);

  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then(values => {
      if (editingUser) {
        updateUser(editingUser.id, values);
      } else {
        addUser(values);
      }
      setVisible(false);
      setEditingUser(null);
      form.resetFields();
    });
  };

  const handleEdit = (record) => {
    setEditingUser(record);
    form.setFieldsValue(record);
    setVisible(true);
  };

  const handleAdd = () => {
    setEditingUser(null);
    form.resetFields();
    setVisible(true);
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Họ tên", dataIndex: "fullname", key: "fullname" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Hành động",
      render: (_, record) => (
        <>
          <Button onClick={() => handleEdit(record)} style={{ marginRight: 8 }}>
            Sửa
          </Button>
          <Button danger onClick={() => deleteUser(record.id)}>
            Xóa
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Quản lý Users</h2>
      <Button type="primary" onClick={handleAdd} style={{ marginBottom: 16 }}>
        Thêm User
      </Button>
      <Table dataSource={users} columns={columns} rowKey="id" />

      <Modal
        title={editingUser ? "Sửa User" : "Thêm User"}
        open={visible}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="fullname" label="Họ tên" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Mật khẩu" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default UserManagementPage;
