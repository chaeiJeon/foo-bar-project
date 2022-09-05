import {MouseEventHandler} from 'react'

type ButtonProps = {
  children: React.ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}
export const Button: FC<ButtonProps> = ({children, onClick}: ButtonProps) => {
  return (
    <button className="btn w-full max-w-xs" onClick={onClick}>
      {children}
    </button>
  )
}
