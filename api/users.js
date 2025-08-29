// api/users.js
export default async function handler(req, res) {
  try {
    const response = await fetch("https://mockfast.io/backend/apitemplate/get/IJYHL13MYF");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Không thể lấy dữ liệu người dùng" });
  }
}
