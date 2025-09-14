import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { Skeleton } from "antd";
import * as UserService from "../services/UserService";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    const users = await UserService.getUsers();
    setData(users);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <Skeleton active paragraph={{ rows: 4 }} />;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Danh sách người dùng
      </h1>
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
        <DataTable apiData={data} />
      </div>
    </div>
  );
};

export default Dashboard;
