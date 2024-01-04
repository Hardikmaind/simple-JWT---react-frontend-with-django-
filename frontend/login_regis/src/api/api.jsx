import Axios1 from "axios";
const Axios = Axios1.create({
  baseURL: process.env.REACT_PUBLIC_API_URL || process.env.API_URL,
});

Axios.interceptors.request.use(async (request) => {
  const token = localStorage.getItem(
    process.env.REACT_PUBLIC_TOKEN || process.env.TOKEN
  );
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  return request;
});

export default Axios;
