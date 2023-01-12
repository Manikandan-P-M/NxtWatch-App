import styled from 'styled-components'

export const HomeBodyVideoItems = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 15px;
  @media screen and (min-width: 576px) {
    width: 50%;
    height: 350px;
    padding-right: 10px;
    padding-top: 30px;
  }
  @media screen and (min-width: 768px) {
    width: 33.3%;
    margin-bottom: 50px;
  }
`
export const HomeBodyVideoThumbNail = styled.img`
  width: 100%;
  object-fit: contain;
  padding-bottom: 15px;
`
export const HomeBodyVideoDetails = styled.div`
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (min-width: 576px) {
    padding: 0px;
  }
`
export const HomeBodyVideoProfileImage = styled.img`
  width: 40px;
  height: 45px;
  margin-right: 15px;
`
export const HomeBodyVideoContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const HomeBodyVideoTitle = styled.p`
  font-size: 16px;
  line-height: 23px;
  margin-bottom: 6px;
  font-weight: 401;
  color: ${props => (props.isLight ? '#1e293b' : '#e2e8f0')};
`
export const HomeBodyVideoChannelContent = styled.div`
  display: flex;
  align-items: center;
  color: #475569;
  font-weight: 400;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`
export const HomeBodyChannelName = styled.p`
  font-size: 14px;
  margin-right: 25px;
  @media screen and (min-width: 576px) {
    margin-bottom: 8px;
  }
`
export const HomeBodyPubVieCont = styled.ul`
  display: flex;
  align-items: center;
  padding: 0px;
`
export const HomeBodyPubView = styled.li`
  font-size: 14px;
  margin-right: 15px;
  padding-right: 10px;
  @media screen and (min-width: 576px) {
    list-style-type: ${props => (props.decoration ? 'none' : '')};
  }
`
