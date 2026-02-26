import { useQuery } from "@tanstack/react-query";
import { getAllAdhkar } from "../services/adhkarServices";

export function useAdhkar(){
    return useQuery({
        queryKey:["adhkar"],
        queryFn: async ()=>getAllAdhkar()
    })
}