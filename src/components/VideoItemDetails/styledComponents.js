import styled from 'styled-components'
import ReactPlayer from 'react-player'

export const StyledReactPlayer = styled(ReactPlayer)`
  flex-shrink: 1;
  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`

export const VideoStats = styled.p`
  display: inline;
  margin: 0;
  padding: 0;
`
export const JustifyBetween = styled.div`
  display: flex;
  justify-content: space-between;
  filter: brightness(75%);
  font-size: 14px;
  padding: 0 10px;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
  }
`
export const TransparentButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  color: #64748b;
  padding: 0 15px 0 0;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition-duration: 150ms;
  ${props => props.dark && !props.active && 'filter: brightness(100) '}
  ${props => props.active && 'color: #bb6325; '}
`
export const VideoTitle = styled.p`
  padding: 0 10px;
  font-weight: bold;
`
export const SubscriberCount = styled.p`
  color: #475569;
  font-size: 12px;
  ${props => props.dark && 'color: #94a3b8;'}
`
export const ChannelName = styled.p`
  margin-top: 0;
  font-size: 14px;
  font-weight: bold;
`
export const ChannelLogo = styled.img`
  height: 30px;
  width: 30px;
`
export const Flex = styled.div`
  display: flex;
  gap: 15px;
  font-size: 14px;
  padding: 0 10px;
`
export const VideoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  max-width: 800px;
  padding-right: 8px;
  @media (max-width: 767px) {
    padding: 0;
  }
`
export const HR = styled.hr`
  width: 100%;
  margin: 14px 0;
  filter: brightness(50%);
`
