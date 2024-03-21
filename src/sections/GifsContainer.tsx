import { ContainerPageable } from '../components/ContainerPageable'
import { GifCard } from '../components/GifCard'
import { useGifsStore } from '../store/GifsStore'

const GifsContainer = () => {
  const { gifs, isLoading, currentPage, error, totalPages } = useGifsStore()

  if (error != null) {
    return <h1 className='mt-5'>Ups hubo un error al solicitar los gifs</h1>
  }

  return (
    <>
      {
        totalPages > 1
          ? <ContainerPageable visibleItems={5} pages={totalPages} currentPage={currentPage} />
          : null
      }

      {
        isLoading
          ? <h1 className='mt-5'>loading</h1>
          : <>
            <section className='grid grid-cols-4 gap-x-2 gap-y-5 mt-5'>
              {
                gifs.map(gif => (
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
    </>
  )
}

export { GifsContainer }
