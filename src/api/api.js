import axios from "axios";

const api = axios.create({
    baseURL: "https://cosmic-lokum-59861f.netlify.app/.netlify/functions/index/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;