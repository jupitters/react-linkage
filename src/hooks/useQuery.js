import { useQuery } from '@tanstack/react-query'
import api from '../api/api'

export const useFetchTotalClicks = (token, onError) => {
    return useQuery({
        queryKey: ["url-totalclick"],
        queryFn: async () => {
            const response = await api.get("api/v1/urls/totalClicks?startDate=2026-01-01&endDate=2026-12-31",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            )
            return response;
        },
        enabled: !!token,

        select: (data) => {
            const convertToArray = Object.keys(data.data).map((key) => ({
                clickDate: key,
                count: data.data[key],
            })) 
            return convertToArray;
        },
        onError,
        staleTime: 5000
    })
}