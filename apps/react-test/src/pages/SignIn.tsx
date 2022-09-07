import toast, {Toaster} from 'react-hot-toast'
import styled from 'styled-components'
import {Navigate, useNavigate} from 'react-router-dom'
import {Input} from 'src/components/Input'
import {Button} from 'src/components/Button'
import {Text} from 'src/components/Text'
import {Base} from 'src/components/Base'

const Center = styled.div`
  max-width: 375px;
  margin: 0 auto;
`
const notify = (text: string) => {
  toast.error(text)
}
type SignInProps = {
  email: string
  password: string
}
export const SignInPage: FPC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function changeInput(event) {
    const name = event.target.name
    const value = event.target.value
    if (name === 'email') setEmail(value)
    else if (name === 'password') setPassword(value)
  }
  function SignUp({email, password}: SignInProps) {
    if (email === '') {
      notify('이메일을 입력하세요')
      return
    }
    if (password === '') {
      notify('비밀번호를 입력하세요')
      return
    }
    fetch(
      'http://playground-719591487.us-west-2.elb.amazonaws.com/rest/auth/sign-in',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email,
          password,
        }),
      },
    )
      .then((response) => {
        if (response.status === 401) {
          notify('존재하지 않는 사용자입니다')
        } else if (response.status === 404) {
          notify('이메일 형식을 맞춰주세요')
        } else if (response.status === 200) {
          return response.json()
        }
      })
      .then((data) => {
        localStorage.setItem('token', data.token)
        navigate('/myPage')
      })
  }
  return (
    <>
      <Base></Base>
      <Center>
        <Input name="email" placeholder="Email" onChange={changeInput}></Input>
        <Text>이메일을 입력하세요</Text>

        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={changeInput}
        ></Input>
        <Text>
          6 글자이상 1개 이상 기호 포함 대소문자 숫자 1개 이상 포함 패스워드를
          입력하세요
        </Text>

        <Button onClick={() => SignUp({email, password})}>SIGN IN</Button>
      </Center>
      <Toaster />
    </>
  )
}

export default SignInPage
