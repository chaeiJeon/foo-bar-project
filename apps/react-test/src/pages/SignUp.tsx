import React from 'react'
import {ToastContainer, toast} from 'react-toastify'

import {Input} from 'src/components/Input'
import {Button} from 'src/components/Button'
import {Text} from 'src/components/Text'

type SignInProps = {
  email: string
  password: string
}
export const SignUpPage: FPC = () => {
  function toastPopup(text: string) {
    console.log(text)
    toast.error(text, {
      autoClose: 3000,
      position: toast.POSITION.TOP_CENTER,
    })
  }
  function SignUp({email, password}: SignInProps) {
    fetch(
      'http://playground-719591487.us-west-2.elb.amazonaws.com/rest/auth/sign-up',
      {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      },
    ).then((response) => {
      console.log(response.json())
      if (response.status === 409) {
        toastPopup('409 error')
      }
    })
  }
  return (
    <>
      <Input placeholder="Email"></Input>
      <Text>이메일을 입력하세요</Text>

      <Input placeholder="Password"></Input>
      <Text>
        6 글자이상 1개 이상 기호 포함 대소문자 숫자 1개 이상 포함 패스워드를
        입력하세요
      </Text>

      <Input placeholder="Write your password again"></Input>
      <Text>확인을 위해 한번더 입력해 주세요</Text>

      <Button onClick={() => SignUp({email: 's', password: 'sf'})}>
        SIGN UP
      </Button>
    </>
  )
}

export default SignUpPage
