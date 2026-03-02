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

export const useFetchMyShortUrls = (token, onError) => {
    return useQuery({
        queryKey: ["my-shorturls"],
        queryFn: async () => {
            return await api.get("api/v1/urls/my-urls",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            ) 
        },
        enabled: !!token,

        select: (data) => {
            const sortedData = data.data.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate))
            return sortedData;
        },
        onError,
        staleTime: 5000
    })
}