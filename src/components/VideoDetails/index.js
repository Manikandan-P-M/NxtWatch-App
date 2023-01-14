import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'

import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddLine} from 'react-icons/ri'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'
import Sidebar from '../Sidebar'
import LoaderView from '../Loader'
import FailureView from '../FailureView'

import {
  VideoDetailsContainer,
  VideoDetailsBodyCont,
  VideoDetailsCont,
  VideoDetailsPlayerCont,
  VideoPlayerCont,
  VideoDetail,
  VideoTitle,
  VideoViewPubCont,
  VideoViewPubList,
  VideoViewPubItem,
  VideoBtnCont,
  VideoBtnsIcon,
  HrLine,
  VideoChannelDetails,
  VideoProfileImg,
  VideoChannelCont,
  VideoChannelName,
  VideoChannelSubCount,
  VideoDesc,
  FailureViewCont,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    like: false,
    dislike: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getFormattedData = data => ({
    name: data.channel.name,
    profileImageUrl: data.channel.profile_image_url,
    subscriberCount: data.channel.subscriber_count,
    description: data.description,
    id: data.id,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    videoUrl: data.video_url,
    viewCount: data.view_count,
  })

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const videoItemDetails = data.video_details
      const videoDetails = this.getFormattedData(videoItemDetails)
      this.setState({videoDetails, apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  updateLike = () => {
    this.setState(prevState => ({like: !prevState.like, dislike: false}))
  }

  updateDislike = () => {
    this.setState(prevState => ({dislike: !prevState.dislike, like: false}))
  }

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

  renderVideoDetails = (isLight, updateSave, savedVideosList) => {
    const {videoDetails, like, dislike} = this.state
    const {
      id,
      videoUrl,
      title,
      viewCount,
      publishedAt,
      profileImageUrl,
      name,
      subscriberCount,
      description,
    } = videoDetails
    let pubAt = formatDistanceToNow(new Date(publishedAt))
    const pubAtList = pubAt.split(' ')

    if (pubAtList.length === 3) {
      pubAtList.shift()
      pubAt = pubAtList.join(' ')
    }
    const present = savedVideosList.find(each => each.id === id)
    const saveIsActive = present !== undefined ? 'active' : null
    const saveText = present !== undefined ? 'Saved' : 'Save'
    const isLike = like ? 'active' : null
    const isDislike = dislike ? 'active' : null

    return (
      <VideoDetailsPlayerCont key={id}>
        <VideoPlayerCont>
          <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
        </VideoPlayerCont>
        <VideoDetail>
          <VideoTitle isLight={isLight}>{title}</VideoTitle>
          <VideoViewPubCont>
            <VideoViewPubList>
              <VideoViewPubItem decoration>
                <p>{viewCount} views</p>
              </VideoViewPubItem>
              <VideoViewPubItem>
                <p>{pubAt} ago</p>
              </VideoViewPubItem>
            </VideoViewPubList>
            <VideoBtnCont>
              <VideoBtnsIcon
                type="button"
                active={isLike}
                onClick={this.updateLike}
              >
                <BiLike size={20} style={{marginRight: '5px'}} />
                Like
              </VideoBtnsIcon>
              <VideoBtnsIcon
                type="button"
                active={isDislike}
                onClick={this.updateDislike}
              >
                <BiDislike size={20} style={{marginRight: '5px'}} />
                Dislike
              </VideoBtnsIcon>
              <VideoBtnsIcon
                type="button"
                active={saveIsActive}
                onClick={() => updateSave(videoDetails)}
              >
                <RiMenuAddLine size={15} style={{marginRight: '5px'}} />
                {saveText}
              </VideoBtnsIcon>
            </VideoBtnCont>
          </VideoViewPubCont>
          <HrLine />
          <VideoChannelDetails>
            <VideoProfileImg src={profileImageUrl} alt="channel logo" />
            <VideoChannelCont>
              <VideoChannelName isLight={isLight}>{name}</VideoChannelName>
              <VideoChannelSubCount>
                {subscriberCount} subscribers
              </VideoChannelSubCount>
            </VideoChannelCont>
          </VideoChannelDetails>
          <VideoDesc isLight={isLight}>{description}</VideoDesc>
        </VideoDetail>
      </VideoDetailsPlayerCont>
    )
  }

  renderVideoDetailsStatus = (isLight, updateSave, savedVideosList) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoDetails(isLight, updateSave, savedVideosList)
      case apiStatusConstants.failure:
        return this.renderFailureView(isLight)
      case apiStatusConstants.inProgress:
        return this.renderLoader(isLight)
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isLight, updateSave, savedVideosList} = value
          return (
            <VideoDetailsContainer
              data-testid="videoItemDetails"
              isLight={isLight}
            >
              <Header />
              <VideoDetailsBodyCont>
                <Sidebar />
                <VideoDetailsCont isLight={isLight}>
                  {this.renderVideoDetailsStatus(
                    isLight,
                    updateSave,
                    savedVideosList,
                  )}
                </VideoDetailsCont>
              </VideoDetailsBodyCont>
            </VideoDetailsContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoDetails
