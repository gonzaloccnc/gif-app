import { HistoryItem } from '../components/HistoryItem'
import { useGifsStore } from '../store/GifsStore'

const AsideBar = () => {
  const history = useGifsStore(state => state.history)

  return (
    <aside className='bg-black fixed top-0 left-0 w-1/4 h-screen p-2 overflow-y-auto'>
      <header>
        <h1 className='text-white text-2xl border-b border-slate-700 py-3'>GifsApp</h1>
      </header>
      <section className='mt-4 flex flex-col gap-4'>
        {
          history.map(item => (
            <HistoryItem key={item} item={item} />
          ))
        }
      </section>
    </aside>
  )
}

export { AsideBar }
