import Header from '../Header'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NotFoundCont,
  NotFoundBodyCont,
  NotFoundBodyContent,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDesc,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isLight} = value
      const imgUrl = isLight
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <NotFoundCont>
          <Header />
          <NotFoundBodyCont>
            <Sidebar />
            <NotFoundBodyContent isLight={isLight}>
              <NotFoundImg src={imgUrl} alt="not found" />
              <NotFoundHeading isLight={isLight}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDesc isLight={isLight}>
                we are sorry, the page you requested could not be found.
              </NotFoundDesc>
            </NotFoundBodyContent>
          </NotFoundBodyCont>
        </NotFoundCont>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
