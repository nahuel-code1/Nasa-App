import axios from "axios";
require("dotenv").config();

const baseURL = "https://api.nasa.gov/techport/api/projects";
const techportApikey = process.env.APIKEY_TECHPORT;

export const getAllTechportId = async () => {
    let response = await axios.get(`${baseURL}?api_key=${techportApikey}`)
    return response.data;
}

export const getAllTechportProjects = async (id) => {
    let response = await axios.get(`${baseURL}/${id}?api_key=${techportApikey}`)
    return response;
}