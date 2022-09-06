import {NavLink} from 'react-router-dom'
export const MyPage: FPC = () => {
  return (
    <>
      <NavLink to="signOut">
        <button className="btn w-full max-w-xs mb-2">SIGN OUT</button>
      </NavLink>
      <NavLink to="updatePassword">
        <button className="btn w-full max-w-xs">UPDATE PASSWORD</button>
      </NavLink>
    </>
  )
}

export default MyPage
