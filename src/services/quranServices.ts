import axios from "axios";
const API_URL="https://quranapi.pages.dev/api"

export async function getQuran() {
   try {
     const response = await axios.get(`${API_URL}/surah.json`)
     return response.data
    } catch (error) {
        console.error("Error fetching quran data:", error);
   }
}

export async function getChapter(chapterNumber : number ) {
   try {
     const response = await axios.get(`${API_URL}/${chapterNumber}.json`)
     return response.data
    } catch (error) {
        console.error("Error fetching quran data:", error);
   }
}



//We will be referring chapter as surah and verse as ayah

