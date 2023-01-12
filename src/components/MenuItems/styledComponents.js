import styled from 'styled-components'

export const MenuLists = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0px;
  width: 100%;
`
export const MenuItems = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props =>
    props.isActive ? props.menuBgColor : 'transparent'};
  color: ${props => (props.isLight ? '#1e293b' : '#e2e8f0')};
  font-weight: ${props => (props.isActive ? 'bold' : '400')};
  padding: 10px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    padding-left: 30px;
  }
`
export const MenuName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin-left: 25px;
  width: 140px;
`
