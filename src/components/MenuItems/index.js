import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'

import NxtWatchContext from '../../context/NxtWatchContext'

import {MenuLists, MenuItems, MenuName} from './styledComponents'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const Menus = props => {
  const {activeMenu} = props
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLight, changeActiveMenu} = value
        const color = isLight ? '#4A5562' : '#f8fafc'
        const menuBgColor = isLight ? '#f1f5f9' : '#383838'
        const iconActive = '#ff0000'
        return (
          <MenuLists>
            <Link to="/" className="nav-link">
              <MenuItems
                menuBgColor={menuBgColor}
                isLight={isLight}
                onClick={() => changeActiveMenu(activeMenu)}
                isActive={activeMenu === activeMenuConstants.home}
                key="HOME"
              >
                <AiFillHome
                  size={14}
                  color={
                    activeMenu === activeMenuConstants.home ? iconActive : color
                  }
                />
                <MenuName>Home</MenuName>
              </MenuItems>
            </Link>
            <Link to="/trending" className="nav-link">
              <MenuItems
                menuBgColor={menuBgColor}
                isLight={isLight}
                onClick={() => changeActiveMenu(activeMenu)}
                isActive={activeMenu === activeMenuConstants.trending}
                key="TRENDING"
              >
                <HiFire
                  size={14}
                  color={
                    activeMenu === activeMenuConstants.trending
                      ? iconActive
                      : color
                  }
                />
                <MenuName>Trending</MenuName>
              </MenuItems>
            </Link>
            <Link to="/gaming" className="nav-link">
              <MenuItems
                menuBgColor={menuBgColor}
                isLight={isLight}
                onClick={() => changeActiveMenu(activeMenu)}
                isActive={activeMenu === activeMenuConstants.gaming}
                key="GAMING"
              >
                <SiYoutubegaming
                  size={14}
                  color={
                    activeMenu === activeMenuConstants.gaming
                      ? iconActive
                      : color
                  }
                />
                <MenuName>Gaming</MenuName>
              </MenuItems>
            </Link>
            <Link to="/saved-videos" className="nav-link">
              <MenuItems
                menuBgColor={menuBgColor}
                isLight={isLight}
                onClick={() => changeActiveMenu(activeMenu)}
                isActive={activeMenu === activeMenuConstants.savedVideos}
                key="SAVED_VIDEOS"
              >
                <RiMenuAddLine
                  size={14}
                  color={
                    activeMenu === activeMenuConstants.savedVideos
                      ? iconActive
                      : color
                  }
                />
                <MenuName>Saved videos</MenuName>
              </MenuItems>
            </Link>
          </MenuLists>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Menus
