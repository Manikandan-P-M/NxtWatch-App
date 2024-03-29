import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LoginAppContainer,
  LoginFormContainer,
  LoginLogo,
  InputContainer,
  InputLabel,
  UserInput,
  ShowPassCont,
  ShowPass,
  LoginBtn,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showErrorMsg: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPass = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 5})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  SubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showPassword} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {errorMsg, showErrorMsg} = this.state
          const {isLight} = value
          const logo = isLight
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          return (
            <LoginAppContainer isLight={isLight}>
              <LoginFormContainer onSubmit={this.SubmitForm} isLight={isLight}>
                <LoginLogo src={logo} alt="login" />
                <InputContainer>
                  <InputLabel
                    className="input-label"
                    htmlFor="username"
                    isLight={isLight}
                  >
                    USERNAME
                  </InputLabel>
                  <UserInput
                    isLight={isLight}
                    type="text"
                    id="username"
                    value={username}
                    placeholder="Username"
                    onChange={this.onChangeUsername}
                  />
                </InputContainer>
                <InputContainer>
                  <InputLabel
                    className="input-label"
                    htmlFor="password"
                    isLight={isLight}
                  >
                    PASSWORD
                  </InputLabel>
                  <UserInput
                    isLight={isLight}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    placeholder="Password"
                    onChange={this.onChangePassword}
                  />
                </InputContainer>
                <ShowPassCont>
                  <input
                    type="checkbox"
                    id="pass"
                    onClick={this.onClickShowPass}
                  />
                  <ShowPass htmlFor="pass" isLight={isLight}>
                    Show Password
                  </ShowPass>
                </ShowPassCont>
                <LoginBtn type="submit">Login</LoginBtn>
                {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginFormContainer>
            </LoginAppContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
