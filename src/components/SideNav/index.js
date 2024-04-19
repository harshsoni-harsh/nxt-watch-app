import {AiFillHome} from 'react-icons/ai'
import {GiGamepad} from 'react-icons/gi'
import {FaFireAlt} from 'react-icons/fa'
import {BsCloudDownload} from 'react-icons/bs'

import {withRouter} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import {
  NavTab,
  OuterContainer,
  P,
  InnerContainer,
  Socials,
  Image,
} from './styledComponents'

const SideNav = props => {
  const {match} = props
  let {path} = match
  path = path.split('/')
  const pathName = path[1]
  return (
    <ThemeContext.Consumer>
      {value => (
        <OuterContainer>
          <InnerContainer>
            <NavTab dark={value.dark} selected={pathName === ''} to="/">
              <AiFillHome />
              <P dark={value.dark} selected={pathName === ''}>
                Home
              </P>
            </NavTab>
            <NavTab
              dark={value.dark}
              selected={pathName === 'trending'}
              to="/trending"
            >
              <FaFireAlt />
              <P dark={value.dark} selected={pathName === 'trending'}>
                Trending
              </P>
            </NavTab>
            <NavTab
              dark={value.dark}
              selected={pathName === 'gaming'}
              to="/gaming"
            >
              <GiGamepad />
              <P dark={value.dark} selected={pathName === 'gaming'}>
                Gaming
              </P>
            </NavTab>
            <NavTab
              dark={value.dark}
              selected={pathName === 'saved-videos'}
              to="/saved-videos"
            >
              <BsCloudDownload />
              <P dark={value.dark} selected={pathName === 'saved-videos'}>
                Saved videos
              </P>
            </NavTab>
          </InnerContainer>
          <InnerContainer bottom>
            <P dark={value.dark}>CONTACT US</P>
            <Socials>
              <Image
                alt="facebook logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              />
              <Image
                alt="twitter logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              />
              <Image
                alt="linked in logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              />
            </Socials>
            <P dark={value.dark} comment>
              Enjoy! Now to see your channels and recommendations!
            </P>
          </InnerContainer>
        </OuterContainer>
      )}
    </ThemeContext.Consumer>
  )
}

export default withRouter(SideNav)
