import {Component} from 'react'
import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'
import Sidebar from '../Sidebar'
import GamingVideos from '../GamingVideos'
import LoaderView from '../Loader'
import FailureView from '../FailureView'

import {
  GamingContainer,
  GamingBodyContainer,
  GamingBodyContent,
  GamingHead,
  GamingIcon,
  GamingHeading,
  GamingBodyVideosLists,
  FailureViewCont,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    activeMenu: 'GAMING',
    gamingVideosList: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const gamingVideosList = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({gamingVideosList, apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  clickRetry = () => this.getGamingVideos()

  renderLoader = isLight => (
    <LoaderContainer>
      <LoaderView isLight={isLight} />
    </LoaderContainer>
  )

  renderFailureView = isLight => (
    <FailureViewCont>
      <FailureView isLight={isLight} clickRetry={this.clickRetry} />
    </FailureViewCont>
  )

  renderGamingVideos = isLight => {
    const {gamingVideosList} = this.state

    return (
      <GamingBodyVideosLists>
        {gamingVideosList.map(each => (
          <GamingVideos
            key={each.id}
            gamingVideoDetails={each}
            isLight={isLight}
          />
        ))}
      </GamingBodyVideosLists>
    )
  }

  renderGamingStatus = isLight => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideos(isLight)
      case apiStatusConstants.failure:
        return this.renderFailureView(isLight)
      case apiStatusConstants.inProgress:
        return this.renderLoader(isLight)
      default:
        return null
    }
  }

  render() {
    const {activeMenu} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isLight} = value
          return (
            <GamingContainer>
              <Header activeMenu={activeMenu} />
              <GamingBodyContainer>
                <Sidebar activeMenu={activeMenu} />
                <GamingBodyContent isLight={isLight}>
                  <GamingHead isLight={isLight}>
                    <GamingIcon isLight={isLight}>
                      <SiYoutubegaming size={28} color="#ff0000" />
                    </GamingIcon>
                    <GamingHeading>Gaming</GamingHeading>
                  </GamingHead>
                  {this.renderGamingStatus(isLight)}
                </GamingBodyContent>
              </GamingBodyContainer>
            </GamingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
