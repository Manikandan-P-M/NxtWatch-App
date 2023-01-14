import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: ${props => (props.isLight ? '#f9f9f9' : '#0f0f0f')};
`
export const VideoDetailsBodyCont = styled.div`
  display: flex;
`
export const VideoDetailsCont = styled.div`
  height: 91.7vh;
  width: 100%;
  overflow-y: auto;
  background-color: ${props => (props.isLight ? '#f9f9f9' : '#0f0f0f')};
  padding-top: 20px;
  padding-bottom: 30px;
  @media screen and (min-width: 768px) {
    padding-left: 25px;
    padding-right: 25px;
  }
`
export const VideoDetailsPlayerCont = styled.div`
  width: 100%;
  height: 100%;
`
export const VideoPlayerCont = styled.div`
  width: 100%;
  height: 50%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #000;
  @media screen and (min-width: 768px) {
    height: 65%;
    padding: 0px;
  }
`
export const VideoDetail = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    padding-right: 0px;
  }
`
export const VideoTitle = styled.h1`
  font-size: 22px;
  line-height: 23px;
  margin-top: 20px;
  margin-bottom: 25px;
  font-weight: 401;
  color: ${props => (props.isLight ? '#1e293b' : '#e2e8f0')};
`
export const VideoViewPubCont = styled.div`
  display: flex;
  flex-direction: column;
  color: #64748b;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const VideoViewPubList = styled.ul`
  display: flex;
  padding: 0px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`
export const VideoViewPubItem = styled.li`
  font-size: 14px;
  margin-right: 15px;
  padding-right: 10px;
  list-style-type: ${props => (props.decoration ? 'none' : '')};
`
export const VideoBtnCont = styled.div`
  display: flex;
`
export const VideoBtnsIcon = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  font-size: 16px;
  color: ${props => (props.active === 'active' ? '#2563eb' : '#64748b')};
  font-weight: 450;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 20px;
`
export const HrLine = styled.hr`
  width: 100%;
  background-color: #475569;
`
export const VideoChannelDetails = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`
export const VideoProfileImg = styled.img`
  width: 55px;
  height: 55px;
  margin-right: 15px;
`
export const VideoChannelCont = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`
export const VideoChannelName = styled.p`
  color: ${props => (props.isLight ? '#1e293b' : '#e2e8f0')};
  font-weight: 401;
  margin-bottom: 10px;
`
export const VideoChannelSubCount = styled.p`
  color: #64748b;
  font-weight: 400;
`
export const VideoDesc = styled.p`
  font-size: 14px;
  color: ${props => (props.isLight ? '#1e293b' : '#e2e8f0')};
  margin-top: 20px;
  font-weight: 450;
  @media screen and (min-width: 768px) {
    margin-left: 70px;
  }
`
export const FailureViewCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 40px;
`
export const LoaderContainer = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
`
