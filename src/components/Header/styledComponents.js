import styled from 'styled-components'

export const NavMobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isLight ? '#fff' : '#212121')};
  padding: 15px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavDesktopContainer = styled(NavMobileContainer)`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    padding: 15px 40px;
    padding-left: 58px;
  }
`

export const NavWebLogo = styled.img`
  width: 110px;
`
export const NavMobileLists = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavMobileItems = styled.li`
  margin-left: 25px;
`

export const NavMobileIconBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
`

export const NavMobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${props => (props.isLight ? '#fff' : '#212121')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavMobileMenuCloseIconBtn = styled(NavMobileIconBtn)`
  align-self: flex-end;
  margin-right: 20px;
  margin-top: 30px;
`
export const NavMobileMenus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`
export const NavLogoutPopCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`
export const NavLogoutPopUpCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isLight ? '#ffffff' : '#212121')};
  color: ${props => (props.isLight ? '#4f46e5' : '#B5B6B7')};
  border-radius: 10px;
  padding: 25px 20px;
`
export const LogoutContent = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  margin-bottom: 30px;
  font-weight: 400;
`
export const LogoutBtn = styled.button`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;
  background-color: #2082f2;
  color: #fff;
  border-radius: 3px;
  padding: 10px 15px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
  border: none;
  outline: none;
`
export const LogoutOutlineBtn = styled(LogoutBtn)`
  background-color: transparent;
  color: #a0b0c0;
  border: 2px solid #a0b0c0;
`
export const NavDesktopLists = styled(NavMobileLists)`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const NavDesktopItems = styled.li`
  margin-left: 25px;
`
export const NavDesktopProfile = styled.img`
  width: 28px;
`
export const NavDesktopLogoutBtn = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 450;
  background-color: transparent;
  border: 1px solid ${props => (props.isLight ? '#2082f2' : '#e2e8f0')};
  color: ${props => (props.isLight ? '#2082f2' : '#e2e8f0')};
  padding: 3px 13px;
  cursor: pointer;
`
