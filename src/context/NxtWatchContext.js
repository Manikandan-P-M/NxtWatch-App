import React from 'react'

const NxtWatchContext = React.createContext({
  isLight: true,
  activeMenu: 'HOME',
  save: false,
  savedVideosList: [],
  changeTheme: () => {},
  changeActiveMenu: () => {},
  updateSave: () => {},
  addVideosToSavedVideos: () => {},
  deleteVideosFromSavedVideos: () => {},
})

export default NxtWatchContext
