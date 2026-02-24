import axios from "axios";

export async function getQuran() {
   try {
     const response = await axios.get(`https://quranapi.pages.dev/api/surah.json`)
     return response.data
    } catch (error) {
        console.error("Error fetching quran data:", error);
   }
}

export async function getChapter(chapterNumber : number ) {
   try {
     const response = await axios.get(`https://quranapi.pages.dev/api/${chapterNumber}.json`)
     return response.data
    } catch (error) {
        console.error("Error fetching quran data:", error);
   }
}



//We will be referring chapter as surah and verse as ayah

