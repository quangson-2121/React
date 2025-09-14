import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { getUsers } from "../services/UserService";
import { Skeleton } from "antd";


const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading , setLoading] = useState(true)

 useEffect(() => {
  getUsers()
    .then((res) => setData(res))
    .catch((err) => console.error("Lỗi gọi API:", err))
    .finally(() => setLoading(false));
}, []);
  if (loading){
       return <Skeleton active paragraph={{ rows: 4 }} />
  }
  console.log("API URL:", process.env.REACT_APP_API_URL);

  return (
  <div className="min-h-screen bg-gray-100 p-6 flex flex-col justify-center items-center">
  <h1 className="text-3xl font-bold mb-6 text-gray-800" style={{justifySelf:"center"}}>
    Danh sách người dùng
  </h1>

  <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
    <DataTable apiData={data} />
  </div>
</div>
  );
};

export default Dashboard;
