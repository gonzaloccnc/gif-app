import { useGifsStore } from '../store/GifsStore'

interface HistoryItemProps {
  item: string
}

const HistoryItem = ({ item }: HistoryItemProps) => {
  const searchGifs = useGifsStore(state => state.getGifs)

  const handleClick = () => {
    void searchGifs(item)
  }

  return (
    <div
      className='bg-white text-black p-2 rounded-md cursor-pointer'
      onClick={handleClick}
    >
      <span>{item}</span>
    </div>
  )
}

export { HistoryItem }
