import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Li = styled.li`
  @media (min-width: 576px) {
    max-width: 250px;
    margin-bottom: 10px;
    margin-right: 10px;
  }
`

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  width: 100%;
  gap: 10px;
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const ChannelLogo = styled.img`
  max-width: 40px;
  height: 100%;
  margin-top: 5px;
`

export const VideoDetails = styled.div`
  width: 100%;
  gap: 10px;
  padding-top: 5px;
  color: black;
  text-decoration: none;
  display: flex;
  @media (max-width: 575px) {
    padding: 5px 15px;
  }
`

export const VideoTitle = styled.p`
  margin: 5px 0;
  color: #1e293b;
  font-size: 14px;
  font-weight: bold;
  ${props => props.dark && 'color: #ebebeb;'}
`

export const ChannelName = styled.p`
  margin: 5px 0;
`
export const VideoStats = styled.p`
  display: inline;
  margin: 0;
  padding: 0;
`
export const VideoStatDiv = styled.div`
  color: #475569;
  font-size: 14px;
  ${props => props.dark && 'color: #94a3b8;'}
  @media (max-width: 575px) {
    display: flex;
    align-items: center;
  }
`
export const ForSmall = styled.p`
  display: inline;
  margin: 0;
  padding: 0;
  @media (min-width: 576px) {
    display: none;
    color: #1e293b;
  }
`
