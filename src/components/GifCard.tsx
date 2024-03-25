import { useEffect, useRef } from 'react'

interface GifCardProps {
  url: string
  title: string
  isLast: boolean
  fetchNextPage: () => Promise<any>
  hasNextPage: boolean
}

const GifCard = ({ isLast, url, title, fetchNextPage, hasNextPage }: GifCardProps) => {
  const lastCard = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observerApi = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNextPage) {
        observerApi.unobserve(entry.target)
        void fetchNextPage()
      }
    })

    if (lastCard.current != null) observerApi.observe(lastCard.current)
  }, [isLast])

  return (
    <div
      className='flex flex-col rounded-md bg-black text-white gap-2 pb-2'
      ref={isLast ? lastCard : null}
    >
      <img src={url} alt={title} className='rounded-t-md' />
      <p className='flex-1 px-4 grid place-content-center'>{title}</p>
    </div>
  )
}

export { GifCard }
