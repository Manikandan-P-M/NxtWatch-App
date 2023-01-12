import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'

import NxtWatchContext from '../../context/NxtWatchContext'
import Menus from '../MenuItems'

import {
  NavMobileContainer,
  NavDesktopContainer,
  NavWebLogo,
  NavMobileLists,
  NavMobileItems,
  NavDesktopLists,
  NavDesktopItems,
  NavMobileIconBtn,
  NavMobileMenuCloseIconBtn,
  NavMobileMenuContainer,
  NavMobileMenus,
  NavLogoutPopCont,
  NavLogoutPopUpCont,
  LogoutContent,
  LogoutBtn,
  LogoutOutlineBtn,
  NavDesktopProfile,
  NavDesktopLogoutBtn,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const {activeMenu} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLight, changeTheme, changeActiveMenu} = value
        const logo = isLight
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

        return (
          <>
            <NavMobileContainer isLight={isLight}>
              <Link to="/">
                <NavWebLogo
                  src={logo}
                  alt="website logo"
                  onClick={() => changeActiveMenu('HOME')}
                />
              </Link>
              <NavMobileLists>
                <NavMobileItems>
                  <NavMobileIconBtn type="button" onClick={() => changeTheme()}>
                    {isLight ? (
                      <FaMoon size={22} />
                    ) : (
                      <FiSun color="white" size={22} />
                    )}
                  </NavMobileIconBtn>
                </NavMobileItems>
                <NavMobileItems>
                  <Popup
                    modal
                    trigger={
                      <NavMobileIconBtn type="button">
                        <GiHamburgerMenu
                          color={isLight ? 'black' : 'white'}
                          size={27}
                        />
                      </NavMobileIconBtn>
                    }
                    className="popup-content"
                  >
                    {close => (
                      <NavMobileMenuContainer isLight={isLight}>
                        <NavMobileMenuCloseIconBtn
                          type="button"
                          onClick={() => close()}
                        >
                          <IoMdClose
                            color={isLight ? 'black' : 'white'}
                            size={30}
                          />
                        </NavMobileMenuCloseIconBtn>
                        <NavMobileMenus>
                          <Menus activeMenu={activeMenu} />
                        </NavMobileMenus>
                      </NavMobileMenuContainer>
                    )}
                  </Popup>
                </NavMobileItems>
                <NavMobileItems>
                  <Popup
                    modal
                    trigger={
                      <NavMobileIconBtn type="button">
                        <FiLogOut
                          color={isLight ? 'black' : 'white'}
                          size={24}
                        />
                      </NavMobileIconBtn>
                    }
                    className="popup-content"
                  >
                    {close => (
                      <NavLogoutPopCont>
                        <NavLogoutPopUpCont isLight={isLight}>
                          <LogoutContent>
                            Are you sure you want to logout?
                          </LogoutContent>
                          <div>
                            <LogoutOutlineBtn
                              type="button"
                              onClick={() => close()}
                            >
                              Cancel
                            </LogoutOutlineBtn>
                            <LogoutBtn type="button" onClick={onClickLogout}>
                              Confirm
                            </LogoutBtn>
                          </div>
                        </NavLogoutPopUpCont>
                      </NavLogoutPopCont>
                    )}
                  </Popup>
                </NavMobileItems>
              </NavMobileLists>
            </NavMobileContainer>
            <NavDesktopContainer isLight={isLight}>
              <Link to="/">
                <NavWebLogo
                  src={logo}
                  alt="website logo"
                  onClick={() => changeActiveMenu('HOME')}
                />
              </Link>
              <NavDesktopLists>
                <NavDesktopItems>
                  <NavMobileIconBtn type="button" onClick={() => changeTheme()}>
                    {isLight ? (
                      <FaMoon size={22} />
                    ) : (
                      <FiSun color="white" size={23} />
                    )}
                  </NavMobileIconBtn>
                </NavDesktopItems>
                <NavDesktopItems>
                  <NavDesktopProfile
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </NavDesktopItems>
                <NavDesktopItems>
                  <Popup
                    modal
                    trigger={
                      <NavDesktopLogoutBtn type="button" isLight={isLight}>
                        Logout
                      </NavDesktopLogoutBtn>
                    }
                    className="popup-content"
                  >
                    {close => (
                      <NavLogoutPopCont>
                        <NavLogoutPopUpCont isLight={isLight}>
                          <LogoutContent>
                            Are you sure you want to logout?
                          </LogoutContent>
                          <div>
                            <LogoutOutlineBtn
                              type="button"
                              onClick={() => close()}
                            >
                              Cancel
                            </LogoutOutlineBtn>
                            <LogoutBtn type="button" onClick={onClickLogout}>
                              Confirm
                            </LogoutBtn>
                          </div>
                        </NavLogoutPopUpCont>
                      </NavLogoutPopCont>
                    )}
                  </Popup>
                </NavDesktopItems>
              </NavDesktopLists>
            </NavDesktopContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
