import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {
  TrendingBodyVideosItem,
  TrendingBodyVideoItemCont,
  TrendingBodyThumbnail,
  TrendingBodyVideoDetails,
  TrendingBodyVideoProfileImg,
  TrendingBodyVideoContent,
  TrendingBodyVideoTitle,
  TrendingBodyChannelCont,
  TrendingBodyChannelName,
  TrendingBodyPubVieCont,
  TrendingBodyPubView,
} from './styledComponents'

const TrendingVideos = props => {
  const {trendingVideoDetails, isLight} = props
  const {
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
    title,
    id,
    publishedAt,
  } = trendingVideoDetails
  let pubAt = formatDistanceToNow(new Date(publishedAt))
  const pubAtList = pubAt.split(' ')

  if (pubAtList.length === 3) {
    pubAtList.shift()
    pubAt = pubAtList.join(' ')
  }
  return (
    <TrendingBodyVideosItem key={id}>
      <Link to={`/videos/${id}`} className="nav-link">
        <TrendingBodyVideoItemCont>
          <TrendingBodyThumbnail src={thumbnailUrl} alt="video thumbnail" />
          <TrendingBodyVideoDetails>
            <TrendingBodyVideoProfileImg
              src={profileImageUrl}
              alt="channel logo"
            />
            <TrendingBodyVideoContent>
              <TrendingBodyVideoTitle isLight={isLight}>
                {title}
              </TrendingBodyVideoTitle>
              <TrendingBodyChannelCont>
                <TrendingBodyChannelName>{name}</TrendingBodyChannelName>
                <TrendingBodyPubVieCont>
                  <TrendingBodyPubView decoration>
                    <p>{viewCount} views</p>
                  </TrendingBodyPubView>
                  <TrendingBodyPubView>
                    <p>{pubAt} ago</p>
                  </TrendingBodyPubView>
                </TrendingBodyPubVieCont>
              </TrendingBodyChannelCont>
            </TrendingBodyVideoContent>
          </TrendingBodyVideoDetails>
        </TrendingBodyVideoItemCont>
      </Link>
    </TrendingBodyVideosItem>
  )
}

export default TrendingVideos
