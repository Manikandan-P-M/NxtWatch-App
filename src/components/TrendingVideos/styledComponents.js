import styled from 'styled-components'

export const TrendingBodyVideosItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
  }
`
export const TrendingBodyVideoItemCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
  }
`
export const TrendingBodyThumbnail = styled.img`
  width: 100%;
  height: 250px;
  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    width: 300px;
    height: 150px;
  }
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 350px;
  }
`
export const TrendingBodyVideoDetails = styled.div`
  display: flex;
`
export const TrendingBodyVideoProfileImg = styled.img`
  width: 40px;
  height: 45px;
  margin-right: 15px;
  margin-left: 15px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const TrendingBodyVideoContent = styled.div`
  display: flex;
  flex-direction: column;
  @media screen {
    margin-left: 20px;
  }
`
export const TrendingBodyVideoTitle = styled.p`
  font-size: 16px;
  line-height: 23px;
  margin-bottom: 6px;
  font-weight: 401;
  color: ${props => (props.isLight ? '#1e293b' : '#e2e8f0')};
`
export const TrendingBodyChannelCont = styled.div`
  display: flex;
  align-items: center;
  color: #64748b;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`
export const TrendingBodyChannelName = styled.p`
  font-size: 14px;
  margin-right: 25px;
  @media screen and (min-width: 576px) {
    margin-bottom: 8px;
  }
`
export const TrendingBodyPubVieCont = styled.ul`
  display: flex;
  padding: 0px;
`
export const TrendingBodyPubView = styled.li`
  font-size: 14px;
  margin-right: 15px;
  padding-right: 10px;
  @media screen and (min-width: 576px) {
    list-style-type: ${props => (props.decoration ? 'none' : '')};
  }
`
