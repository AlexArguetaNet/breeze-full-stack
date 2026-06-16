import axios from "axios"
import bgImage from "../assets/images/clear-day.jpg"

// Import API prefix
const API_PREFIX = import.meta.env.VITE_API_PREFIX;

const convertTime = async (utc, tz_offset) => {

    const date = await new Date((utc + tz_offset) * 1000);

    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    minutes = minutes.toString().padStart(2, '0');

    return `${hours}:${minutes} ${ampm}`;

}

export const getForecast  = async (city) => {

    try {

        const res = await axios.get(`${API_PREFIX}/api/weather/current?city=${city}`);
        let data = await res.data;

        data.temp = Math.trunc(data.temp); // Truncate temperature value

        // Convert sun times from utc to AM/PM
        data.sunrise = convertTime(data.sunrise, data.tz_offset);
        data.sunset = convertTime(data.sunset, data.tz_offset);

        data.bgImage = bgImage; // Set background image

        return data;
        
    } catch (err) {
        return {err};   
    }

}
