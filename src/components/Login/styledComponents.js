import styled from 'styled-components'

export const LoginAppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isLight ? '#ffffff' : '#212121')};
`
export const LoginFormContainer = styled.form`
  background-color: ${props => (props.isLight ? '#ffffff' : '#0f0f0f')};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 400px;
  margin: auto;
  padding: 30px 20px 40px 20px;
  box-shadow: 0px 5px 40px rgba(7, 7, 7, 0.09);
  @media screen and (min-width: 992px) {
    max-width: 530px;
    padding: 50px 48px 50px 48px;
  }
`
export const LoginLogo = styled.img`
  width: 165px;
  margin-bottom: 15px;
  @media screen and (min-width: 992px) {
    width: 185px;
    margin-bottom: 40px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  margin-top: 25px;
  color: ${props => (props.isLight ? '#475569' : '#e2e8f0')};
`

export const UserInput = styled.input`
  background-color: transparent;
  font-size: 14px;
  height: 40px;
  border: 1px solid ${props => (props.isLight ? '#d7dfe9' : '#404e5f')};
  font-family: 'Roboto';
  color: ${props => (props.isLight ? '#1e293b' : '#e2e8f0')};
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px;
  outline: none;
`

export const ShowPassCont = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-top: 12px;
`

export const ShowPass = styled.label`
  color: ${props => (props.isLight ? '#1e293b' : '#e2e8f0')};
  margin-left: 5px;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 14px;
  cursor: pointer;
`
export const LoginBtn = styled.button`
  width: 100%;
  background-color: #3b82f6;
  color: #fff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border-radius: 8px;
  margin-top: 30px;
  cursor: pointer;
  border: none;
  outline: none;
`
export const ErrorMsg = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
