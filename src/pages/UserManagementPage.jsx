import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input } from "antd";
import * as UserService from "../services/UserService";

function UserManagementPage() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const fetchUsers = async () => {
    const list = await UserService.getUsers();
    setUsers(list);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleOk = async () => {
    const values = await form.validateFields();
    if (editingUser) {
      await UserService.updateUser(editingUser.id, values);
    } else {
      await UserService.addUser(values);
    }
    setVisible(false);
    setEditingUser(null);
    form.resetFields();
    fetchUsers(); // Refresh bảng
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

  const handleDelete = async (id) => {
    await UserService.deleteUser(id);
    fetchUsers();
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
          <Button danger onClick={() => handleDelete(record.id)}>
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
          <Form.Item
            name="fullname"
            label="Họ và Tên"
            rules={[{ required: true, message: "Nhập họ tên" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: "email", message: "Email không hợp lệ" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[{ required: true, message: "Nhập mật khẩu" }]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default UserManagementPage;
