import axios from "axios";
require("dotenv").config();

const baseURL = "https://api.nasa.gov/planetary/apod?api_key="

const Apod_ApiKey = process.env.APIKEY_APOD;

export const GetApodImage = async () => {
    let response = await axios.get(`${baseURL}${Apod_ApiKey}`);
    return response;
}