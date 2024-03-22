import { useInfiniteQuery } from '@tanstack/react-query'
import { type Datum } from '../types/gifs'
import { fetchGifs } from '../utils/fetchGifs'

export const useGifs = (searchQuery: string) => {
  const { isLoading, isError, data, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery<{
    gifs: Datum[]
  }>({
    queryKey: ['gifs', searchQuery],
    queryFn: async ({ pageParam }) => await fetchGifs(searchQuery, pageParam as number),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      // if (lastPage === null) return undefined

      // TODO whats happend if the result of last page is equal to 50 test it
      if (lastPage.gifs.length < 50) {
        return undefined
      }

      return allPages.length
    }
  })

  return {
    isError,
    isLoading,
    gifs: data?.pages.flatMap(x => x.gifs),
    refetch,
    fetchNextPage,
    hasNextPage
  }
}
