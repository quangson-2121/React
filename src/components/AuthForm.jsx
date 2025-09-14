import React, { useState } from "react";
import { Form, Input, Button } from "antd";

function AuthForm({ type = "login", onSubmit }) {
  const [loading, setLoading] = useState(false);

  const handleFinish = async (values) => {
    try {
      setLoading(true);
      await onSubmit(values); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-form w-full">
      <Form layout="vertical" onFinish={handleFinish}>
        {type === "register" && (
          <Form.Item
            label="Họ và Tên"
            name="fullname"
            rules={[{ required: true, message: "Nhập họ và tên" }]}
          >
            <Input placeholder="Họ và tên" className="input-custom" />
          </Form.Item>
        )}

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Nhập email" },
            { type: "email", message: "Email không hợp lệ" },
          ]}
        >
          <Input placeholder="Email" className="input-custom" />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Nhập mật khẩu" }]}
        >
          <Input.Password placeholder="Mật khẩu" className="input-custom" />
        </Form.Item>

        {type === "register" && (
          <Form.Item
            label="Xác nhận mật khẩu"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Xác nhận mật khẩu" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Mật khẩu không khớp"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Nhập lại mật khẩu" className="input-custom" />
          </Form.Item>
        )}

        <Button type="primary" htmlType="submit" block loading={loading} className="btn-submit">
          {type === "login" ? "Đăng nhập" : "Đăng ký"}
        </Button>
      </Form>
    </div>
  );
}

export default AuthForm;
