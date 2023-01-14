import styled from 'styled-components'

export const NotFoundCont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const NotFoundBodyCont = styled.div`
  display: flex;
`
export const NotFoundBodyContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 91.7vh;
  overflow: auto;
  background-color: ${props => (props.isLight ? '#f9f9f9' : '#0f0f0f')};
`
export const NotFoundImg = styled.img`
  width: 80%;
  padding-top: 15px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const NotFoundHeading = styled.h1`
  font-size: 22px;
  margin-top: 30px;
  margin-bottom: 15px;
  color: ${props => (props.isLight ? '#1e293b' : '#e2e8f0')};
`

export const NotFoundDesc = styled.p`
  font-size: 16px;
  font-weight: 401;
  color: #64748b;
`
