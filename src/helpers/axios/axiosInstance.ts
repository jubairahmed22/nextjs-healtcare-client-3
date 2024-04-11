import axios from "axios";


const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accepts"] = "application/json";
instance.defaults.timeout = 60000; 


export {instance}