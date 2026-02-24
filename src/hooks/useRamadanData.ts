import { useQuery } from "@tanstack/react-query";
import { getRamadanData } from "../services/ramadanServices";

export function useRamadanData(lat?:number , lng?:number){
    return useQuery({
        queryKey:["ramadanData",lat, lng],
        queryFn: () => getRamadanData(lat!, lng!),
        enabled:!!lat && !!lng, 
    })
}