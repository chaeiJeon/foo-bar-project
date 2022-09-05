import {FC} from 'react'
import {Button} from 'components/Button'
import {NavLink} from 'react-router-dom'
export const MainPage: FC = () => {
  return (
    <>
      hello
      <NavLink to="signIn">
        <Button>Sign In</Button>
      </NavLink>
      <NavLink to="signUp">
        <Button>Sign Up</Button>
      </NavLink>
    </>
  )
}

export default MainPage
