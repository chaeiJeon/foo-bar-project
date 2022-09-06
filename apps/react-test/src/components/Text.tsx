import SignInPage from 'src/pages/SignIn'

export const Text: FC = (props) => {
  return (
    <div className="pl-5 mb-2 w-full max-w-xs flex justify-start">
      {props.children}
    </div>
  )
}
