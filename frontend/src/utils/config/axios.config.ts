import axios from 'axios';

export default axios.create(
    {
        "baseURL": 'http://localhost:8000/api',
        //Base URL will be completed with the endpoints of our Backend app
        "responseType": 'json',
        "timeout": 6000,
    }
)