import axios from 'axios'; // Renamed the imported type

const AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});
AxiosInstance.interceptors.request.use(async (request) => {
  const access_token = localStorage.getItem('token');
  if (access_token) {
    request.headers['Authorization'] = `Bearer ${access_token}`;
  }
  return request;
});
export default AxiosInstance;