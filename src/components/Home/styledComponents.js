import styled from 'styled-components'
import Loader from 'react-loader-spinner'

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f8fafc;
  overflow: auto;
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-position: center;
  background-size: cover;
  padding: 30px;
  position: relative;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`
export const Div = styled.div`
  background-color: white;
`
export const Image = styled.img`
  max-width: 120px;
  ${props => props.noVideo && 'width: 250px; max-width: 100%;'}
`
export const BannerContent = styled.p`
  max-width: 40%;
`
export const Button = styled.button`
  width: fit-content;
  background-color: transparent;
  border: 1px solid #1e293b;
  color: #1e293b;
  padding: 6px 8px;
  font-weight: 500;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
  ${props =>
    props.close &&
    'padding: 0; margin: 0; position: absolute; left: 95%; top: 15%; border: none;'}
  ${props =>
    props.search && props.dark
      ? 'border-width: 0; padding: 5px 15px; margin: 0; background-color: #666666; color: #212121'
      : ''}
  ${props =>
    props.search
      ? 'border: none; padding: 5px 15px; margin: 0; background-color: #ebebeb;'
      : ''}
  ${props =>
    props.retry
      ? 'border-radius: 5px; padding: 10px 25px; border: none; background-color: #4f46e5; color: #f1f1f1; font-weight: bold; letter-spacing: 0.2px;'
      : ''}
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${props => props.dark && 'background-color: black;'}
`
export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: min(100%, 300px);
  border: 1px solid #cccccc;
  border-radius: 3px;
  ${props => (props.dark ? 'border-color: #666666;' : '')}
  margin: 15px;
  @media (max-width: 575px) {
    width: calc(100% - 30px);
  }
`
export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 5px 10px;
  background-color: transparent;
  border-radius: 3px 0 0 3px;
  ${props => (props.dark ? 'border-color: #666666; color: #cccccc' : '')}
`
export const SearchResults = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 60%;
  @media (min-width: 576px) {
    padding: 15px;
  }
`
export const ScreenCenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 40px 4px;
`
export const H1 = styled.h1`
  margin-top: 20px;
  font-size: 1.5rem;
  color: #231f20;
  text-align: center;
  ${props => props.dark && 'color: #f1f1f1'}
`
export const P = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  color: #616e7c;
  font-size: 1.2rem;
  text-align: center;
  ${props => props.dark && 'color: #64748b'}
`
export const StyledLoader = styled(Loader)`
  ${props => props.dark || 'filter: invert(1);'}
`
