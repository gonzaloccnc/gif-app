interface ArrowButtonProps {
  children: React.ReactNode
  onClick?: React.MouseEventHandler
  className?: string
  bg?: string
}

const BaseButtonPage = ({ children, bg = 'bg-green-400', className, onClick }: ArrowButtonProps) => {
  return (
    <button
      className={`rounded-md w-10 ${bg} h-10 flex-shrink-0 grid place-content-center text-white font-bold ${className ?? ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export { BaseButtonPage }
