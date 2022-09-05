type InputProps = {
  placeholder: string
}

export const Input: FC<InputProps> = ({placeholder}: InputProps) => {
  return (
    <input
      className="input input-bordered w-full max-w-xs"
      placeholder={placeholder}
    ></input>
  )
}
