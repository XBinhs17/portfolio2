import {
    API_ROOT
} from "../utils/contants";

import axios from "axios";

export const fecthPorductAPI = async () => {
    const response = await axios.get(`${API_ROOT}/v1/product`)
    return response.data;
}

export const fetchCategoryAPI = async () => {
    const response = await axios.get(`${API_ROOT}/v1/category`)
    return response.data;
}