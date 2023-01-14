import {Component} from 'react'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingVideos from '../TrendingVideos'
import LoaderView from '../Loader'
import FailureView from '../FailureView'

import {
  TrendingContainer,
  TrendingBodyContainer,
  TrendingBodyContent,
  TrendingHead,
  TrendingIcon,
  TrendingHeading,
  TrendingBodyVideosLists,
  FailureViewCont,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    activeMenu: 'TRENDING',
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const trendingVideosList = data.videos.map(eachItem => ({
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({trendingVideosList, apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  clickRetry = () => this.getTrendingVideos()

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

  renderTrendingVideos = isLight => {
    const {trendingVideosList} = this.state

    return (
      <TrendingBodyVideosLists>
        {trendingVideosList.map(each => (
          <TrendingVideos
            key={each.id}
            trendingVideoDetails={each}
            isLight={isLight}
          />
        ))}
      </TrendingBodyVideosLists>
    )
  }

  renderTrendingStatus = isLight => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideos(isLight)
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
            <TrendingContainer data-testid="trending" isLight={isLight}>
              <Header activeMenu={activeMenu} />
              <TrendingBodyContainer>
                <Sidebar activeMenu={activeMenu} />
                <TrendingBodyContent isLight={isLight}>
                  <TrendingHead isLight={isLight}>
                    <TrendingIcon isLight={isLight}>
                      <HiFire size={28} color="#ff0000" />
                    </TrendingIcon>
                    <TrendingHeading>Trending</TrendingHeading>
                  </TrendingHead>
                  {this.renderTrendingStatus(isLight)}
                </TrendingBodyContent>
              </TrendingBodyContainer>
            </TrendingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
