import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {
  HomeBodyVideoItems,
  HomeBodyVideoThumbNail,
  HomeBodyVideoDetails,
  HomeBodyVideoProfileImage,
  HomeBodyVideoContent,
  HomeBodyVideoTitle,
  HomeBodyVideoChannelContent,
  HomeBodyChannelName,
  HomeBodyPubVieCont,
  HomeBodyPubView,
} from './styledComponents'

const HomeVideos = props => {
  const {homeVideoDetails, isLight} = props
  const {
    thumbnailUrl,
    channel,
    viewCount,
    title,
    id,
    publishedAt,
  } = homeVideoDetails

  let pubAt = formatDistanceToNow(new Date(publishedAt))
  const pubAtList = pubAt.split(' ')

  if (pubAtList.length === 3) {
    pubAtList.shift()
    pubAt = pubAtList.join(' ')
  }

  return (
    <HomeBodyVideoItems key={id}>
      <Link to={`/videos/${id}`} className="nav-link">
        <HomeBodyVideoThumbNail src={thumbnailUrl} alt="video thumbnail" />
        <HomeBodyVideoDetails>
          <HomeBodyVideoProfileImage
            src={channel.profileImageUrl}
            alt="channel logo"
          />
          <HomeBodyVideoContent>
            <HomeBodyVideoTitle isLight={isLight}>{title}</HomeBodyVideoTitle>
            <HomeBodyVideoChannelContent>
              <HomeBodyChannelName>{channel.name}</HomeBodyChannelName>
              <HomeBodyPubVieCont>
                <HomeBodyPubView decoration>
                  <p>{viewCount} views</p>
                </HomeBodyPubView>
                <HomeBodyPubView>
                  <p>{pubAt} ago</p>
                </HomeBodyPubView>
              </HomeBodyPubVieCont>
            </HomeBodyVideoChannelContent>
          </HomeBodyVideoContent>
        </HomeBodyVideoDetails>
      </Link>
    </HomeBodyVideoItems>
  )
}

export default HomeVideos
