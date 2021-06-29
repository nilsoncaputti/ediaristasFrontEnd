import axios from "axios";

const url = 'http://192.168.100.153:8000';
//const url = 'https://ediaristas-workshop.herokuapp.com';

export const ApiService = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json' 
    }
}); 