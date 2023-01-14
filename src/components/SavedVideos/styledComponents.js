import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: ${props => (props.isLight ? '#f9f9f9' : '#0f0f0f')};
`
export const TrendingBodyContainer = styled.div`
  display: flex;
`
export const TrendingBodyContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 91.7vh;
  overflow: auto;
  background-color: ${props => (props.isLight ? '#f9f9f9' : '#0f0f0f')};
`
export const TrendingHead = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isLight ? '#f1f1f1' : '#181818')};
  color: ${props => (props.isLight ? '#1e293b' : '#e2e8f0')};
  padding: 20px 40px 20px 25px;
  @media screen and (min-width: 768px) {
    padding-left: 50px;
  }
`
export const TrendingIcon = styled.span`
  background-color: ${props => (props.isLight ? '#e2e8f0' : '#0f0f0f')};
  border-radius: 50%;
  padding: 15px;
`
export const TrendingHeading = styled.h1`
  font-size: 32px;
  margin-left: 20px;
`
export const TrendingBodyVideosLists = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
  list-style-type: none;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (min-width: 576px) {
    padding-left: 25px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 50px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`
export const NoVideosCont = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NoVideosImg = styled.img`
  width: 80%;
  padding-top: 15px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const NoVideosHeading = styled.h1`
  font-size: 22px;
  margin-top: 30px;
  margin-bottom: 15px;
  color: ${props => (props.isLight ? '#1e293b' : '#e2e8f0')};
`
export const NoVideosDesc = styled.p`
  font-size: 16px;
  font-weight: 401;
  color: #64748b;
`
