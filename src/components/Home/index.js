import {Component} from 'react'
import Cookies from 'js-cookie'

import {IoMdClose} from 'react-icons/io'
import {AiOutlineSearch} from 'react-icons/ai'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'
import Sidebar from '../Sidebar'
import HomeVideos from '../HomeVideos'
import LoaderView from '../Loader'
import FailureView from '../FailureView'

import {
  HomeContainer,
  HomeBodyContainer,
  HomeBodyContent,
  GetPremiumCont,
  PremiumCloseBtn,
  PremiumLogo,
  PremiumText,
  PremiumGetBtn,
  HomeSearchContainer,
  HomeBodyVideosContainer,
  SearchInput,
  SearchBtn,
  HomeBodyVideosList,
  NoSearchFilterCont,
  NoSearchVideoImg,
  NoSearchVideoHeading,
  NoSearchVideoDesc,
  NoSearchRetryBtn,
  LoaderContainer,
  FailureViewCont,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    activeMenu: 'HOME',
    adPremium: true,
    searchInput: '',
    homeVideosList: [],
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const homeVideosList = data.videos.map(eachItem => ({
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({homeVideosList, apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  clickRetry = () => this.getHomeVideos()

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  closePremiumAd = () => {
    this.setState({adPremium: false})
  }

  showAdPremium = () => (
    <GetPremiumCont>
      <PremiumCloseBtn type="button" onClick={this.closePremiumAd}>
        <IoMdClose color="#4A5562" size={22} />
      </PremiumCloseBtn>
      <PremiumLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
      />
      <PremiumText>Buy Nxt Watch Premium prepaid plans with UPI</PremiumText>
      <PremiumGetBtn type="button">GET IT NOW</PremiumGetBtn>
    </GetPremiumCont>
  )

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

  renderHomeVideos = isLight => {
    const {homeVideosList} = this.state
    const homeVideos = homeVideosList.length !== 0

    return homeVideos ? (
      <HomeBodyVideosList>
        {homeVideosList.map(eachItem => (
          <HomeVideos
            key={eachItem.id}
            homeVideoDetails={eachItem}
            isLight={isLight}
          />
        ))}
      </HomeBodyVideosList>
    ) : (
      <NoSearchFilterCont>
        <NoSearchVideoImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoSearchVideoHeading isLight={isLight}>
          No Search results found
        </NoSearchVideoHeading>
        <NoSearchVideoDesc>
          Try different key words or remove search filter
        </NoSearchVideoDesc>
        <NoSearchRetryBtn type="button" onClick={this.clickRetry}>
          Retry
        </NoSearchRetryBtn>
      </NoSearchFilterCont>
    )
  }

  renderHomeStatus = isLight => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomeVideos(isLight)
      case apiStatusConstants.failure:
        return this.renderFailureView(isLight)
      case apiStatusConstants.inProgress:
        return this.renderLoader(isLight)
      default:
        return null
    }
  }

  render() {
    const {searchInput, activeMenu, adPremium} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isLight} = value
          return (
            <HomeContainer>
              <Header activeMenu={activeMenu} />
              <HomeBodyContainer>
                <Sidebar activeMenu={activeMenu} />
                <HomeBodyContent isLight={isLight}>
                  {adPremium && this.showAdPremium()}
                  <HomeBodyVideosContainer isLight={isLight}>
                    <HomeSearchContainer isLight={isLight}>
                      <SearchInput
                        isLight={isLight}
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                      />
                      <SearchBtn
                        isLight={isLight}
                        type="button"
                        onClick={this.getHomeVideos}
                      >
                        <AiOutlineSearch size={18} />
                      </SearchBtn>
                    </HomeSearchContainer>
                    {this.renderHomeStatus(isLight)}
                  </HomeBodyVideosContainer>
                </HomeBodyContent>
              </HomeBodyContainer>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
