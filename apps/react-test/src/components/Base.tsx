import styled from 'styled-components'

const Background = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  height: 172px;
  margin-bottom: 34px;

  @media screen and (max-width: 375px) {
    height: 301px;
  }
`
export const Base = () => {
  return (
    <>
      <Background></Background>
    </>
  )
}
