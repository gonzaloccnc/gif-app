import { GifCard } from '../components/GifCard'
import { useGifs } from '../hooks/useGifs'

const GifsContainer = () => {
  const { isError, fetchNextPage, gifs, isLoading, hasNextPage } = useGifs()

  if (isError) {
    return <h1 className='mt-5'>Ups hubo un error al solicitar los gifs</h1>
  }
  console.log('render from container')

  return (
    <>
      {
        isLoading
          ? <h1 className='mt-5'>loading</h1>
          : <>
            <section className='grid grid-cols-4 gap-x-2 gap-y-5 mt-5'>
              {
                gifs?.map((gif, i) => (
                  <GifCard
                    key={crypto.randomUUID()}
                    title={gif.title}
                    url={gif.images.downsized_medium.url}
                    isLast={i === gifs.length - 1}
                    fetchNextPage={fetchNextPage}
                    hasNextPage={hasNextPage}
                  />
                ))
              }
            </section>
          </>
      }
    </>
  )
}

export { GifsContainer }
