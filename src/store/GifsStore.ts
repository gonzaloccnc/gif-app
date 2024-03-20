import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type Datum, type GifResponse } from '../types/gifs'

interface GifProps {
  gifs: Datum[]
  history: string[]
  isLoading: boolean
  error: any
  hints: number
  previousTerm: string
  currentPage: number
  totalPages: number
}
interface GifsState extends GifProps {
  getGifs: (searchTerm: string, offset?: number, limit?: number) => Promise<void>
  addHistoryItem: (item: string) => void
}

export const useGifsStore = create<GifsState>()(
  persist(
    (set, get) => ({
      gifs: [],
      history: [],
      error: null,
      isLoading: false,
      hints: 0,
      previousTerm: '',
      currentPage: 0,
      totalPages: 0,

      async getGifs(term, offset = 0, limit = 50) {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=gSTV6JClsR2d7n3a0rgPGBhGcXFNUU0o&q=${term}&limit=${limit}&offset=${offset}`
        set({ isLoading: true })

        try {
          const res = await fetch(url).then(res => res.json()) as GifResponse
          set({
            gifs: res.data,
            isLoading: false,
            hints: res.pagination.total_count,
            previousTerm: term,
            currentPage: (offset / limit),
            totalPages: Math.ceil(res.pagination.total_count / limit)
          })
        } catch (ex) {
          set({ error: ex })
        }
      },

      addHistoryItem(item) {
        const historySet = new Set(get().history)
        historySet.add(item)
        const historyParsed = Array.from(historySet)
        const historyLS = { state: { historyParsed }, version: 0 }
        window.localStorage.setItem('history', JSON.stringify(historyLS))

        set({ history: historyParsed })
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
