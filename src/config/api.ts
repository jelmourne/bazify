import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:7317" });

export default instance;
