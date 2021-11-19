import axios from "axios";

const httpClient = axios.create({ baseURL: "http://ongapi.alkemy.org/api" });

export default httpClient;