import axios from "axios";

const api = axios.create({ baseURL: "https://project-el-geladon-api.herokuapp.com" });

export default api;
