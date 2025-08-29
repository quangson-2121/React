// api/users.js
const axios = require("axios");

export default async function handler(req, res) {
  try {
    const response = await axios.get("https://mockfast.io/backend/apitemplate/get/IJYHL13MYF");
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Lỗi gọi MockFast:", error.message);
    res.status(500).json({ error: "Không thể lấy dữ liệu người dùng" });
  }
}
