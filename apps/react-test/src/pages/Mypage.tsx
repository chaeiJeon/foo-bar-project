import {NavLink} from 'react-router-dom'
import {Center} from './Main'
export const MyPage: FPC = () => {
  return (
    <>
      <Center>
        <NavLink to="/">
          <button
            className="btn w-full max-w-xs mb-2"
            onClick={() => {
              localStorage.removeItem('token')
            }}
          >
            SIGN OUT
          </button>
        </NavLink>
        <NavLink to="/updatePassword">
          <button className="btn w-full max-w-xs">UPDATE PASSWORD</button>
        </NavLink>
      </Center>
    </>
  )
}

export default MyPage
