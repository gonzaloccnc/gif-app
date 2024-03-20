import { useGifsStore } from '../store/GifsStore'

interface PageButtonProps {
  value: number
  page: number
}

const PageButton = ({ value, page }: PageButtonProps) => {
  const { getGifs: searchGifs, previousTerm, currentPage } = useGifsStore()
  const activeClass = currentPage === page ? 'bg-green-800' : 'bg-green-400'

  const handleClick = () => {
    void searchGifs(previousTerm, page * 50)
  }

  return (
    <button
      className={`rounded-md py-2 px-4 text-white font-bold ${activeClass}`}
      onClick={handleClick}
    >
      {value}
    </button>
  )
}

export { PageButton }
