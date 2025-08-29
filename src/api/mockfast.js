// src/api/mockfast.js
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "/backend/apitemplate/get/IJYHL13MYF", // link API của bạn
  headers: { "Content-Type": "application/json" },
});

export default axiosClient;
