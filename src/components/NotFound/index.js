import Layout from '../Layout'
import ThemeContext from '../../context/ThemeContext'
import {H1, Image, P, ScreenCenterDiv} from '../Home/styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => (
      <Layout>
        <ScreenCenterDiv>
          <Image
            noVideo
            src={
              value.dark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
            }
            alt="not found"
          />
          <H1 dark={value.dark}>Page Not Found</H1>
          <P dark={value.dark}>
            We are sorry, the page you requested could not be found.
          </P>
        </ScreenCenterDiv>
      </Layout>
    )}
  </ThemeContext.Consumer>
)

export default NotFound
