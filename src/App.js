import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

class App extends Component {
  state = {isLight: true, activeMenu: activeMenuConstants.home}

  changeTheme = () => {
    this.setState(prevState => ({isLight: !prevState.isLight}))
  }

  changeActiveMenu = activeMenu => {
    this.setState({activeMenu})
  }

  render() {
    const {isLight, activeMenu} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isLight,
          activeMenu,
          changeTheme: this.changeTheme,
          changeActiveMenu: this.changeActiveMenu,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
