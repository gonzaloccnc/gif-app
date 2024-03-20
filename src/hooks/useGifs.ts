import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(r => r.json())

export function useGifs(term: string) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=gSTV6JClsR2d7n3a0rgPGBhGcXFNUU0o&q=${term}`
  const { data, error, isLoading } = useSWR(url, fetcher)

  return {
    user: data,
    isLoading,
    isError: error
  }
}
