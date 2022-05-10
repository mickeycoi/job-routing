import axios from "axios";
import { BASE_URL } from "./config";

const apiService = axios.create({
  baseURL: BASE_URL,
});
apiService.interceptors.request.use(
  (request) => {
    console.log("START REQUEST", request);
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
    return Promise.reject(error);
  }
);
apiService.interceptors.response.use(
  (response) => {
    console.log("REPONSE", response);
    return response;
  },
  function (error) {
    console.log("REPONSE ERROR", error);
    return Promise.reject(error);
  }
);
export default apiService;
