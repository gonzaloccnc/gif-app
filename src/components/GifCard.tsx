interface GifCardProps {
  url: string
  title: string
}

const GifCard = ({ url, title }: GifCardProps) => {
  return (
    <div className='flex flex-col rounded-md bg-black text-white gap-2 pb-2'>
      <img src={url} alt={title} className='rounded-t-md' />
      <p className='flex-1 px-4 grid place-content-center'>{title}</p>
    </div>
  )
}

export { GifCard }
