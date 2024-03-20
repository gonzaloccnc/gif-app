import { GifCard } from '../components/GifCard'
import { PageButton } from '../components/PageButton'
import { useGifsStore } from '../store/GifsStore'
import { range } from '../utils/range'

const GifsContainer = () => {
  const { gifs, hints, isLoading, error } = useGifsStore()
  // with paginables buttons
  const totalButtons = Math.ceil(hints / 50)
  const arrayNumbers = [...range(totalButtons)]

  if (error != null) {
    return <h1 className='mt-5'>Ups hubo un error al solicitar los gifs</h1>
  }

  return (
    <>
      <div className='w-3/4 mx-auto flex flex-wrap items-center justify-center gap-4 mt-5'>
        {
          arrayNumbers.map(x => (
            <PageButton key={x} value={x + 1} page={x} />
          ))
        }
      </div>
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
