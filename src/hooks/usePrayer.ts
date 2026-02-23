import { useQuery } from "@tanstack/react-query";
import { getPrayerTimes } from "../services/prayerServices";

export function usePrayer(lat: number, lng: number) {
  return  useQuery({
    queryKey: ["prayerTimes", lat, lng],
    queryFn: async () => getPrayerTimes(lat!, lng!),
    enabled: !!lat && !!lng,
  });
}
