import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useGifsStore } from '../store/GifsStore'
import { type Datum } from '../types/gifs'
import { fetchGifs } from '../utils/fetchGifs'

export const useGifs = () => {
  const { setGifs, gifs, query } = useGifsStore()
  const { isLoading, status, isError, data, refetch, fetchNextPage, hasNextPage } =
    useInfiniteQuery<{
      gifs: Datum[]
    }>({
      queryKey: ['gifs', query],
      queryFn: async ({ pageParam }) => await fetchGifs(query, pageParam as number),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) => {
        // TODO whats happend if the result of last page is equal to 50 test it
        if (lastPage.gifs.length < 50) {
          return undefined
        }

        return allPages.length
      }
    })

  useEffect(() => {
    if (status === 'success') { setGifs(data.pages.flatMap(x => x.gifs)) }
  }, [data, status])

  return {
    isError,
    isLoading,
    gifs,
    refetch,
    fetchNextPage,
    hasNextPage
  }
}
