import {FC} from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const Center = styled.div``

export const MainPage: FC = () => {
  return (
    <>
      <Center>
        <NavLink to="signIn">
          <button className="btn w-full max-w-xs mb-2">Sign In</button>
        </NavLink>
        <NavLink to="signUp">
          <button className="btn w-full max-w-xs">Sign Up</button>
        </NavLink>
      </Center>
    </>
  )
}

export default MainPage
