import { useGifsStore } from '../store/GifsStore'

interface HistoryItemProps {
  item: string
}

const HistoryItem = ({ item }: HistoryItemProps) => {
  const setQuery = useGifsStore(state => state.setQuery)

  const handleClick = () => {
    setQuery(item)
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
