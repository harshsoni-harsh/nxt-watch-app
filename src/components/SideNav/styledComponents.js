import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const OuterContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: fit-content;
  padding: 20px 0px 20px 0;
  max-width: 250px;
  flex-grow: 1;
  @media (max-width: 767px) {
    display: none;
  }
`
export const InnerContainer = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  color: #231f20;
  font-size: 16px;
  ${props => (props.bottom ? 'margin: 20px 0 0 20px; gap: 20px;' : '')}
`
export const NavTab = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: normal;
  gap: 20px;
  width: initial;
  padding: 10px 50px 10px 20px;
  text-decoration: none;
  color: #475569;
  ${props =>
    props.selected &&
    'background-color: #e2e8f0; color: #ff0b37; font-weight: bold;'}
  ${props =>
    props.selected &&
    props.dark &&
    'background-color: #343434; color: #ff0b37; font-weight: bold;'}
`
export const P = styled.p`
  margin: 0;
  ${props => {
    switch (true) {
      case props.selected && props.dark:
        return 'color: #f8fafc;'
      case props.selected:
        return 'color: #1e293b;'
      case props.dark && props.comment:
        return 'color: #cbd5e1;'
      case props.dark:
        return 'color: #d7dfe9;'
      case props.comment:
        return 'color: #475569;'
      default:
        return ''
    }
  }}
  padding: 0;
`
export const Socials = styled.div`
  display: flex;
  gap: 10px;
`
export const Image = styled.img`
  height: 30px;
`
