import { useGifsStore } from '../store/GifsStore'
import { BaseButtonPage } from './BaseButtonPage'

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
    <BaseButtonPage
      bg={activeClass}
      onClick={handleClick}
    >
      {value}
    </BaseButtonPage>
  )
}

export { PageButton }
