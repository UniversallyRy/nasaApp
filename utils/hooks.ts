import useSWR from "swr"
import fetcher from "./fetcher"

export function useAPOD(date: string) {
  const { data, error } = useSWR(`/api/apod/${date}`, fetcher)
  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}
