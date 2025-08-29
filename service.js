// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/users", async (req, res) => {
  try {
    const response = await axios.get("https://mockfast.io/backend/apitemplate/get/IJYHL13MYF");
    res.json(response.data);
  } catch (error) {
    console.error("Lỗi gọi MockFast:", error.message);
    res.status(500).json({ error: "Không thể lấy dữ liệu người dùng" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Backend đang chạy tại http://localhost:${PORT}`);
});
