import React from 'react'

const NxtWatchContext = React.createContext({
  isLight: true,
  activeMenu: 'HOME',
  changeTheme: () => {},
  changeActiveMenu: () => {},
})

export default NxtWatchContext
