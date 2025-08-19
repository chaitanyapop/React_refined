import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("authToken") || "fake-jwt-token";
  config.headers.Authorization = `Bearer ${token}`;
  console.log("Request Sent:", config);
  return config;
});

// ✅ Response Interceptor - Handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default api;
