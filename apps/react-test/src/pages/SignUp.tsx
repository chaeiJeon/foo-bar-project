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
  password2: string
}
export const SignUpPage: FPC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  function changeInput(event) {
    const name = event.target.name
    const value = event.target.value
    if (name === 'email') setEmail(value)
    else if (name === 'password') setPassword(value)
    else if (name === 'password2') setPassword2(value)
  }
  function SignUp({email, password, password2}: SignInProps) {
    if (email === '') {
      notify('이메일을 입력하세요')
      return
    }
    if (password === '') {
      notify('비밀번호를 입력하세요')
      return
    }
    if (password !== password2) {
      notify('입력한 패스워드가 일치하지 않습니다')
      return
    }
    fetch(
      'http://playground-719591487.us-west-2.elb.amazonaws.com/rest/auth/sign-up',
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
        if (response.status === 404) {
          notify('404 not found')
        } else if (response.status === 409) {
          notify('409 error')
        } else if (response.status === 201) {
          navigate('/myPage')
          return response.json()
        }
      })
      .then((data) => {
        localStorage.setItem('token', data.token)
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

        <Input
          name="password2"
          type="password"
          placeholder="Write your password again"
          onChange={changeInput}
        ></Input>
        <Text>확인을 위해 한번더 입력해 주세요</Text>

        <Button onClick={() => SignUp({email, password, password2})}>
          SIGN UP
        </Button>
      </Center>
      <Toaster />
    </>
  )
}

export default SignUpPage
