import styled from 'styled-components'

export const GamingBodyVideosItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-right: 20px;
  margin-bottom: 50px;
  @media screen and (min-width: 576px) {
    width: 33%;
  }
  @media screen and (min-width: 768px) {
    width: 25%;
  }
`
export const GamingBodyVideosImg = styled.img`
  width: 100%;
  object-fit: contain;
`
export const GamingBodyVideoTitle = styled.p`
  font-size: 16px;
  font-weight: 401;
  line-height: 28px;
  margin-top: 10px;
  color: ${props => (props.isLight ? '#1e293b' : '#e2e8f0')};
`
export const GamingBodyVideoDesc = styled.p`
  font-size: 15px;
  color: #475569;
  font-weight: 400;
`
