import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    height: 91.7vh;
    width: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 22px;
    background-color: ${props => (props.isLight ? '#fff' : '#212121')};
    color: ${props => (props.isLight ? '#1e293b' : '#e2e8f0')};
  }
  @media screen and (min-width: 992px) {
    width: 270px;
  }
`
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-bottom: 40px;
`
export const ContactMediaCont = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const ContactMedia = styled.img`
  width: 30px;
  margin-right: 10px;
`
export const ContactDesc = styled.p`
  font-family: 'Roboto';
  line-height: 22px;
  font-weight: ${props => (props.weight ? 'bold' : '450')};
  font-size: ${props => (props.weight ? '15px' : '15px')};
  width: ${props => (props.weight ? '100px' : '200px')};
`
