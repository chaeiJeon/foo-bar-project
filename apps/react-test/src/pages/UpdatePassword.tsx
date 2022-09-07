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
  oldPassword: string
  newPassword: string
  newPassword2: string
}
export const UpdatePassword: FPC = () => {
  const navigate = useNavigate()
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPassword2, setNewPassword2] = useState('')
  function changeInput(event) {
    const name = event.target.name
    const value = event.target.value
    if (name === 'oldPassword') setOldPassword(value)
    else if (name === 'newPassword') setNewPassword(value)
    else if (name === 'newPassword2') setNewPassword2(value)
  }
  function updatePassword({
    oldPassword,
    newPassword,
    newPassword2,
  }: SignInProps) {
    if (oldPassword === '') {
      notify('기존 패스워드를 입력하세요')
      return
    }
    if (newPassword === '') {
      notify('새로운 패스워드를 입력하세요')
      return
    }
    if (newPassword !== newPassword2) {
      notify('입력한 패스워드가 일치하지 않습니다')
      return
    }
    const token = localStorage.getItem('token')
    fetch(
      'http://playground-719591487.us-west-2.elb.amazonaws.com/rest/auth/update-password',
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          password: oldPassword,
          newPassword: newPassword,
        }),
      },
    ).then((response) => {
      if (response.status === 404) {
        notify('404 not found')
      } else if (response.status === 401) {
        notify('401 error')
      } else if (response.status === 200) {
        navigate('/myPage')
      }
    })
  }
  return (
    <>
      <Base></Base>
      <Center>
        <Input
          name="oldPassword"
          type="password"
          placeholder="Password"
          onChange={changeInput}
        ></Input>
        <Text>기존 패스워드를 입력하세요</Text>

        <Input
          name="newPassword"
          type="password"
          placeholder="New password"
          onChange={changeInput}
        ></Input>
        <Text>
          6 글자이상 1개 이상 기호 포함 대소문자 숫자 1개 이상 포함 패스워드를
          입력하세요
        </Text>

        <Input
          name="newPassword2"
          type="password"
          placeholder="New Password"
          onChange={changeInput}
        ></Input>
        <Text>다시한번 패스워드를 입력해주세요</Text>

        <Button
          onClick={() =>
            updatePassword({
              oldPassword,
              newPassword,
              newPassword2,
            })
          }
        >
          UPDATE PASSWORD
        </Button>
      </Center>
      <Toaster />
    </>
  )
}

export default UpdatePassword
