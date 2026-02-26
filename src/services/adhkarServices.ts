import axios from "axios";
const API_URL= "https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json"

export async function getAllAdhkar() {
   try {
     const response = await axios.get(`${API_URL}`)
    return response.data
   } catch (error) {
        console.error("Error fetching Adhkar", error);
   }
}
