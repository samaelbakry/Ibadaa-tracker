import { useQuery } from "@tanstack/react-query";
import { getChapter, getQuran } from "../services/quranServices";

export function useQuranData(){
    return useQuery({
        queryKey:["quranData"],
        queryFn: () => getQuran(),
    })
}
export function useChapterData(chapterNumber : number){
    return useQuery({
        queryKey:["chapterData", chapterNumber],
        queryFn: () => getChapter(chapterNumber),
    })
}