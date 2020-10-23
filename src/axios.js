import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/ikea-clone-8d049/us-central1/api'
});

export default instance;