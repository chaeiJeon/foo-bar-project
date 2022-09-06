import {ChangeEventHandler} from 'react'

type InputProps = {
  name: string
  type?: string
  placeholder: string
  onChange?: ChangeEventHandler<HTMLButtonElement>
}

export const Input: FC<InputProps> = ({
  name,
  type,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <input
      className="input input-bordered w-full max-w-xs"
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  )
}
