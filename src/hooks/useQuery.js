import { useQuery } from '@tanstack/react-query'
import api from '../api/api'

export const useFetchTotalClicks = (token, onError) => {
    return useQuery("url-totalclick", async () => {
        return await api.get("api/v1/urls/totalClicks?startDate=2026-01-01&endDate=2026-12-31")
    })
}