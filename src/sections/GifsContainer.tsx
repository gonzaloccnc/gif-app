import { GifCard } from '../components/GifCard'
import { useGifs } from '../hooks/useGifs'

const GifsContainer = () => {
  const { isError, fetchNextPage, gifs, isLoading, hasNextPage } = useGifs('mamut')

  if (isError) {
    return <h1 className='mt-5'>Ups hubo un error al solicitar los gifs</h1>
  }

  return (
    <>
      {
        isLoading
          ? <h1 className='mt-5'>loading</h1>
          : <>
            <section className='grid grid-cols-4 gap-x-2 gap-y-5 mt-5'>
              {
                gifs?.map((gif) => (
                  <GifCard
                    key={gif.id}
                    title={gif.title}
                    url={gif.images.original.url}
                  />
                ))
              }
            </section>
          </>
      }
      {
        hasNextPage
          ? <h1 className='w-full py-3 text-center' onClick={() => { void fetchNextPage() }}>Cargar mas</h1>
          : null
      }
    </>
  )
}

export { GifsContainer }
