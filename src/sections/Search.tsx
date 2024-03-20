import { useState } from 'react'
import { useGifsStore } from '../store/GifsStore'

const Search = () => {
  const [term, setTerm] = useState('')
  const { getGifs: searchGift, addHistoryItem } = useGifsStore()

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setTerm(target.value)
  }

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()
    if (term.trim() === '') return
    void searchGift(term)
    addHistoryItem(term)
    setTerm('')
  }

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
      <label htmlFor='searchTerm'>Buscar:</label>
      <input
        type='search'
        name='searchTerm'
        id='searchTerm'
        placeholder='Buscar gifs....'
        className='border-b p-2 border-black outline-none'
        onChange={handleChange}
        value={term}
      />
    </form>
  )
}

export { Search }
