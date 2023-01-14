import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: ${props => (props.isLight ? '#f9f9f9' : '#0f0f0f')};
`
export const GamingBodyContainer = styled.div`
  display: flex;
`
export const GamingBodyContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 91.7vh;
  overflow: auto;
  background-color: ${props => (props.isLight ? '#f9f9f9' : '#0f0f0f')};
`
export const GamingHead = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isLight ? '#f1f1f1' : '#181818')};
  color: ${props => (props.isLight ? '#1e293b' : '#e2e8f0')};
  padding: 20px 40px 20px 25px;
  @media screen and (min-width: 768px) {
    padding-left: 50px;
  }
`
export const GamingIcon = styled.span`
  background-color: ${props => (props.isLight ? '#e2e8f0' : '#0f0f0f')};
  border-radius: 50%;
  padding: 15px;
`
export const GamingHeading = styled.h1`
  font-size: 32px;
  margin-left: 20px;
`
export const GamingBodyVideosLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0px;
  list-style-type: none;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 25px;
  @media screen and (min-width: 576px) {
    padding-left: 25px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 50px;
    padding-top: 30px;
    padding-bottom: 30px;
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
  align-self: center;
`
