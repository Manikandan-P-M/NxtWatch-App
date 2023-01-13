import styled from 'styled-components'

export const FailureImg = styled.img`
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`
export const FailureHeading = styled.h1`
  font-size: 16px;
  color: ${props => (props.isLight ? '#1e293b' : '#e2e8f0')};
  margin-top: 15px;
  margin-bottom: 15px;
`
export const FailureDesc = styled.p`
  font-size: 14px;
  color: ${props => (props.isLight ? '#475569' : '#64748b')};
  margin-bottom: 10px;
`
export const FailureBtn = styled.button`
  background-color: #4f46e5;
  border-radius: 3px;
  padding: 10px 25px;
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
`
