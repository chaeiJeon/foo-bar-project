import {lazy} from 'react'
import {RouteObject} from 'react-router-dom'

const MainLayout = lazy(() => import('layouts/main-layout/Index'))
const Main = lazy(() => import('pages/Main'))
const SignIn = lazy(() => import('src/pages/SignIn'))
const SignUp = lazy(() => import('src/pages/SignUp'))
const MyPage = lazy(() => import('src/pages/Mypage'))
const UpdatePassword = lazy(() => import('src/pages/UpdatePassword'))

export const routes: RouteObject[] = [
  {
    children: [
      {
        element: <Main />,
        index: true,
      },
      {
        element: <SignIn />,
        path: 'signIn',
      },
      {
        element: <SignUp />,
        path: 'signUp',
      },
      {
        element: <UpdatePassword />,
        path: '/updatePassword',
      },
      {
        element: <MyPage />,
        path: 'myPage',
      },
    ],
    element: <MainLayout />,
    path: '/',
  },
]
