import { AsideBar } from './sections/AsideBar'
import { GifsContainer } from './sections/GifsContainer'
import { Search } from './sections/Search'

const App = () => {
  return (
    <>
      <AsideBar />
      <main className='w-3/4 relative top-0 left-1/4 p-2'>
        <Search />
        <GifsContainer />
      </main>
    </>
  )
}

export default App
