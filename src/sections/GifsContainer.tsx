import { BaseButtonPage } from '../components/BaseButtonPage'
import { GifCard } from '../components/GifCard'
import { PageButton } from '../components/PageButton'
import { useGifsStore } from '../store/GifsStore'
import { range } from '../utils/range'

const GifsContainer = () => {
  const { gifs, hints, isLoading, error, totalPages } = useGifsStore()
  // with paginables buttons
  const totalButtons = Math.ceil(hints / 50)
  const arrayNumbers = [...range(totalButtons)]

  if (error != null) {
    return <h1 className='mt-5'>Ups hubo un error al solicitar los gifs</h1>
  }

  // const gap = 12
  // const visibleElements = 5
  // const buttonWidth = 40
  // const containerWidth = (visibleElements * buttonWidth) + ((visibleElements - 1) * gap) + 2 * buttonWidth + 2 * gap
  // console.log(containerWidth)

  return (
    <>
      {
        totalPages > 1
          ? <div className='flex gap-3 mt-5 w-[356px] items-center justify-center mx-auto'>
            <BaseButtonPage>{'<'}</BaseButtonPage>
            <div className='w-[250px] flex overflow-hidden gap-3'>
              {
                arrayNumbers.map(x => (
                  <PageButton key={x} value={x + 1} page={x} />
                ))
              }
            </div>
            <BaseButtonPage>{'>'}</BaseButtonPage>
          </div>
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
