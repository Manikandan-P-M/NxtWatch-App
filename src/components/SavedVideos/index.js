import {HiFire} from 'react-icons/hi'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingVideos from '../TrendingVideos'

import {
  TrendingContainer,
  TrendingBodyContainer,
  TrendingBodyContent,
  TrendingHead,
  TrendingIcon,
  TrendingHeading,
  TrendingBodyVideosLists,
  NoVideosCont,
  NoVideosImg,
  NoVideosHeading,
  NoVideosDesc,
} from './styledComponents'

const SavedVideos = () => {
  const savedVideos = (isLight, savedVideosList) => (
    <TrendingBodyVideosLists>
      {savedVideosList.map(each => (
        <TrendingVideos
          key={each.id}
          trendingVideoDetails={each}
          isLight={isLight}
        />
      ))}
    </TrendingBodyVideosLists>
  )

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLight, savedVideosList} = value
        const savedVideosLen = savedVideosList.length === 0
        const activeMenu = 'SAVED_VIDEOS'
        return (
          <TrendingContainer data-testid="savedVideos" isLight={isLight}>
            <Header activeMenu={activeMenu} />
            <TrendingBodyContainer>
              <Sidebar activeMenu={activeMenu} />
              <TrendingBodyContent isLight={isLight}>
                {savedVideosLen ? (
                  <NoVideosCont>
                    <NoVideosImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                      alt="no saved videos"
                    />
                    <NoVideosHeading isLight={isLight}>
                      No saved videos found
                    </NoVideosHeading>
                    <NoVideosDesc isLight={isLight}>
                      You can save your videos while watching them
                    </NoVideosDesc>
                  </NoVideosCont>
                ) : (
                  <>
                    <TrendingHead isLight={isLight}>
                      <TrendingIcon isLight={isLight}>
                        <HiFire size={28} color="#ff0000" />
                      </TrendingIcon>
                      <TrendingHeading>Saved Videos</TrendingHeading>
                    </TrendingHead>
                    {savedVideos(isLight, savedVideosList)}
                  </>
                )}
              </TrendingBodyContent>
            </TrendingBodyContainer>
          </TrendingContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SavedVideos
