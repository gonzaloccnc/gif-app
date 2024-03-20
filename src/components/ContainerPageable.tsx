import { useState } from 'react'
import { range } from '../utils/range'
import { BaseButtonPage } from './BaseButtonPage'
import { PageButton } from './PageButton'

interface ContainerPageableProps {
  pages: number
  visibleItems: number
}

const ContainerPageable = ({ pages, visibleItems }: ContainerPageableProps) => {
  const [page, setPage] = useState(0)

  const totalPages = Math.ceil(pages / visibleItems)
  const remaingItems = page + 1 === totalPages
    ? pages - (visibleItems * page)
    : visibleItems
  const nextItems = [...range(remaingItems, 1, page * visibleItems)]

  const handleClick = (op: string) => {
    setPage(current => {
      if (op === 'sum') {
        if (current + 1 === totalPages) return current
        return current + 1
      }
      if (op === 'subs') {
        if (current - 1 < 0) return 0
        return current - 1
      }

      return current
    })
  }

  return (
    <div className='flex gap-3 mt-5 max-w-[356px] items-center justify-center mx-auto'>
      <BaseButtonPage onClick={() => { handleClick('subs') }}>
        {'<<'}
      </BaseButtonPage>
      <div className='max-w-[250px] flex gap-3'>
        {
          nextItems.map(x => (
            <PageButton key={x} value={x + 1} page={x} />
          ))
        }
      </div>
      <BaseButtonPage onClick={() => { handleClick('sum') }}>
        {'>>'}
      </BaseButtonPage>
    </div>
  )
}

export { ContainerPageable }
