import axios from "axios";

const instance = axios.create({
    // baseURL: 'http://localhost:5001/ikea-clone-8d049/us-central1/api' // local
    baseURL: 'https://us-central1-ikea-clone-8d049.cloudfunctions.net/api' // cloud
});

export default instance;