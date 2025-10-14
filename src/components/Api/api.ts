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
  (response) => response, // axios internally treats this as Promise.resolve(response)
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error); // in terms of error we have to explicitly mention that this is an error so that it will execute the
    // .catch block if we normally return the error then axios will internally treat it as Promise.Resolve(error) therefore we have to mention
    // Promise.reject(error)
  }
);

export default api;
