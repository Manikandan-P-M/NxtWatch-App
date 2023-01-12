import {formatDistanceToNow} from 'date-fns'

import {
  TrendingBodyVideosItem,
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
    channel,
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
      <TrendingBodyThumbnail src={thumbnailUrl} alt="video thumbnail" />
      <TrendingBodyVideoDetails>
        <TrendingBodyVideoProfileImg
          src={channel.profileImageUrl}
          alt="channel logo"
        />
        <TrendingBodyVideoContent>
          <TrendingBodyVideoTitle isLight={isLight}>
            {title}
          </TrendingBodyVideoTitle>
          <TrendingBodyChannelCont>
            <TrendingBodyChannelName>{channel.name}</TrendingBodyChannelName>
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
    </TrendingBodyVideosItem>
  )
}

export default TrendingVideos
