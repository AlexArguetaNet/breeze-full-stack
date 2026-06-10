import axios from "axios";

// Import API prefix
const API_PREFIX = import.meta.env.VITE_API_PREFIX;

export const getForecast  = async (city) => {

    try {

        const res = await axios.get(`${API_PREFIX}/api/weather/current?city=${city}`);
        return res.data;
        
    } catch (err) {
        return {err};   
    }

}