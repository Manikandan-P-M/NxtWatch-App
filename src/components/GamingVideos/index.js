import {Link} from 'react-router-dom'

import {
  GamingBodyVideosItem,
  GamingBodyVideosImg,
  GamingBodyVideoTitle,
  GamingBodyVideoDesc,
} from './styledComponents'

const GamingVideos = props => {
  const {gamingVideoDetails, isLight} = props
  const {thumbnailUrl, viewCount, title, id} = gamingVideoDetails

  return (
    <GamingBodyVideosItem key={id}>
      <Link to={`/videos/${id}`} className="nav-link">
        <GamingBodyVideosImg src={thumbnailUrl} alt="video thumbnail" />
        <GamingBodyVideoTitle isLight={isLight}>{title}</GamingBodyVideoTitle>
        <GamingBodyVideoDesc>
          {viewCount} Watching Worldwide
        </GamingBodyVideoDesc>
      </Link>
    </GamingBodyVideosItem>
  )
}

export default GamingVideos
