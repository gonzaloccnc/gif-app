import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type Datum } from '../types/gifs'

interface GifProps {
  gifs: Datum[]
  history: string[]
  query: string
}
interface GifsState extends GifProps {
  setGifs: (gifs: Datum[]) => void
  setQuery: (query: string) => void
}

export const useGifsStore = create<GifsState>()(
  persist(
    (set, get) => ({
      gifs: [],
      history: [],
      query: '',

      setQuery(query) {
        const historySet = new Set(get().history)
        historySet.add(query)
        const historyParsed = Array.from(historySet)
        const historyLS = { state: { historyParsed }, version: 0 }
        window.localStorage.setItem('history', JSON.stringify(historyLS))
        set({ query, history: historyParsed })
      },

      setGifs(gifs) {
        set({ gifs })
      }
    }),
    {
      name: 'history',
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => ['history'].includes(key))
        )
    }
  )
)
