import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: ${props => (props.isLight ? '#f9f9f9' : '#181818')};
`
export const HomeBodyContainer = styled.div`
  display: flex;
`
export const HomeBodyContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 91.7vh;
  overflow: auto;
  background-color: ${props => (props.isLight ? '#f9f9f9' : '#181818')};
`
export const GetPremiumCont = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  color: #4a5562;
  width: 100%;
  padding: 10px 35px 20px 35px;
  @media screen and (min-width: 576px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
  }
  @media screen and (min-width: 768px) {
    height: 250px;
  }
`
export const PremiumCloseBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  align-self: flex-end;
  cursor: pointer;
`
export const PremiumLogo = styled.img`
  width: 140px;
`
export const PremiumText = styled.p`
  font-size: 17px;
  font-weight: 401;
  margin-top: 12px;
  margin-bottom: 25px;
  width: 200px;
  line-height: 30px;
  @media screen and (min-width: 576px) {
    width: 350px;
    font-size: 18px;
    margin-top: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    width: 400px;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`
export const PremiumGetBtn = styled.button`
  background-color: transparent;
  border: 2px solid #4a5562;
  color: #4a5562;
  font-weight: 600;
  margin-bottom: 10px;
  padding: 7px 13px;
  align-self: flex-start;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const HomeBodyVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => (props.isLight ? '#f9f9f9' : '#181818')};
  padding-top: 25px;
  padding-bottom: 20px;
  @media screen and (min-width: 576px) {
    padding-left: 35px;
    align-items: flex-start;
  }
`
export const HomeSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 35px;
  border: 2px solid ${props => (props.isLight ? '#d5d5d5' : '#3F3D3F')};
  border-radius: 3px;
  background-color: ${props => (props.isLight ? '#fff' : '#181818')};
  @media screen and (min-width: 576px) {
    max-width: 460px;
  }
  @media screen and (min-width: 992px) {
    max-width: 530px;
  }
`
export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 16px;
  padding-left: 15px;
  background-color: transparent;
  color: ${props => (props.isLight ? '#4A5562' : '#e2e8f0')};
`
export const SearchBtn = styled.button`
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
  border: none;
  border-left: 2px solid ${props => (props.isLight ? '#d5d5d5' : '#3F3D3F')};
  cursor: pointer;
  background-color: ${props => (props.isLight ? '#f4f4f4' : '#303031')};
  color: ${props => (props.isLight ? '#4A5562' : '#e2e8f0')};
`
export const HomeBodyVideosList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 15px;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 30px;
  }
`
export const NoSearchFilterCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 40px;
`
export const NoSearchVideoImg = styled.img`
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`
export const NoSearchVideoHeading = styled.h1`
  font-size: 16px;
  color: ${props => (props.isLight ? '#1e293b' : '#e2e8f0')};
  margin-top: 15px;
  margin-bottom: 15px;
`
export const NoSearchVideoDesc = styled.p`
  font-size: 14px;
  color: #475569;
  margin-bottom: 10px;
`
export const NoSearchRetryBtn = styled.button`
  background-color: #4f46e5;
  border-radius: 3px;
  padding: 10px 25px;
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
`
export const LoaderContainer = styled.div`
  align-self: center;
`
export const FailureViewCont = styled(NoSearchFilterCont)``
