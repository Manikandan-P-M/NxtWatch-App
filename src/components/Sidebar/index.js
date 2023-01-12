import NxtWatchContext from '../../context/NxtWatchContext'

import Menus from '../MenuItems'

import {
  SidebarContainer,
  ContactContainer,
  ContactMediaCont,
  ContactMedia,
  ContactDesc,
} from './styledComponents'

const Sidebar = props => {
  const {activeMenu} = props
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLight} = value
        return (
          <SidebarContainer isLight={isLight}>
            <Menus activeMenu={activeMenu} />
            <ContactContainer>
              <ContactDesc weight>CONTACT US</ContactDesc>
              <ContactMediaCont>
                <ContactMedia
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <ContactMedia
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <ContactMedia
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ContactMediaCont>
              <ContactDesc>
                Enjoy! Now to see your channels and recommendations!
              </ContactDesc>
            </ContactContainer>
          </SidebarContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Sidebar
