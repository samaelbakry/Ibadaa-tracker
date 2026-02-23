import axios from "axios";
const API_KEY= "BF0vOPImTjFcAsiZGTwH9t8c7CESiDdxCNII2h5R1zuDUUHk"

export async function getRamadanData(lat: number, lng: number) {
    try {
        const response = await axios.get(`https://islamicapi.com/api/v1/ramadan/?lat=${lat}&lon=${lng}&shifting=1&api_key=${API_KEY}`)
        return response.data
    } catch (error) {
        console.error("Error fetching Ramadan data:", error);
    }

}