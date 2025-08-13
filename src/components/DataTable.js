import React from "react";

function DataTable({ apiData }) {
  return (
    <div>
      <h2>Dữ liệu từ API</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ và Tên</th>
            <th>Email</th>
            <th>Tuổi</th>
            <th>Địa chỉ</th>
            <th>Ngày sinh</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.first_name} {item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td>{item.address}</td>
              <td>{item.birthday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
