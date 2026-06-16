import axios from "axios"
import bgImage from "../assets/images/clear-day.jpg"

// Import API prefix
const API_PREFIX = import.meta.env.VITE_API_PREFIX;

export const getForecast  = async (city) => {

    try {

        const res = await axios.get(`${API_PREFIX}/api/weather/current?city=${city}`);
        let data = res.data;

        data.bgImage = bgImage;

        return data;
        
    } catch (err) {
        return {err};   
    }

}