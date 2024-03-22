import { type Datum, type GifResponse } from '../types/gifs'

export async function fetchGifs(searchQuery: string, pageParam: number, limit = 50): Promise<{
  nextCursor?: number
  gifs: Datum[]
}> {
  // if (searchQuery === '') return null
  const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=gSTV6JClsR2d7n3a0rgPGBhGcXFNUU0o&q=${searchQuery}&limit=${limit}&offset=${pageParam * 50}`)
    .then(r => r.json()) as GifResponse

  return {
    gifs: res.data,
    nextCursor: pageParam + 1
  }
}
