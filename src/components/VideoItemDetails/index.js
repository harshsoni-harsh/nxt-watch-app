import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow, parse} from 'date-fns'
import {BiDislike, BiLike} from 'react-icons/bi'
import {FiSave} from 'react-icons/fi'

import ThemeContext from '../../context/ThemeContext'
import Layout from '../Layout'
import {
  Button,
  H1,
  Image,
  P,
  ScreenCenterDiv,
  StyledLoader,
} from '../Home/styledComponents'
import {
  VideoStats,
  JustifyBetween,
  TransparentButton,
  VideoTitle,
  SubscriberCount,
  ChannelName,
  ChannelLogo,
  Flex,
  VideoDiv,
  HR,
  StyledReactPlayer,
} from './styledComponents'
import SavedVideoContext from '../../context/SavedVideoContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class VideoItemDetails extends Component {
  state = {
    like: false,
    dislike: false,
    videoDetails: {},
    saved: false,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    const {match} = this.props
    const {id} = match.params
    this.id = id
    this.fetchVideo()
  }

  fetchVideo = async () => {
    const {id} = this
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
      videoDetails: {},
    })
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      'https://apis.ccbp.in/videos/'.concat(id),
      options,
    )
    if (response.ok) {
      const data = await response.json()
      const videoDetails = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({videoDetails, apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onLike = () => {
    const {like} = this.state
    if (like)
      this.setState({
        like: false,
      })
    else
      this.setState({
        like: true,
        dislike: false,
      })
  }

  onDislike = () => {
    const {dislike} = this.state
    if (dislike)
      this.setState({
        dislike: false,
      })
    else
      this.setState({
        like: false,
        dislike: true,
      })
  }

  toggleSave = () => {
    this.setState(prev => ({
      saved: !prev.saved,
    }))
  }

  renderVideo = dark => {
    const {videoDetails, apiStatus, like, dislike} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return (
          <VideoDiv id={videoDetails.id}>
            <StyledReactPlayer width="100%" url={videoDetails.videoUrl} />
            <VideoTitle dark={dark}>{videoDetails.title}</VideoTitle>
            <JustifyBetween>
              <div>
                <VideoStats>
                  {videoDetails.viewCount}&nbsp;views&nbsp;•&nbsp;
                </VideoStats>
                <VideoStats>
                  {formatDistanceToNow(
                    parse(videoDetails.publishedAt, 'MMM d, y', new Date()),
                  )}
                </VideoStats>
              </div>
              <div>
                <TransparentButton dark={dark} active={like} onClick={this.onLike}>
                  <BiLike /> Like
                </TransparentButton>
                <TransparentButton dark={dark} active={dislike} onClick={this.onDislike}>
                  <BiDislike /> Dislike
                </TransparentButton>
                <SavedVideoContext.Consumer>
                  {value => {
                    const {onSave, removeSave} = value
                    const {saved} = this.state
                    const saveVideo = () => {
                      this.toggleSave()
                      if (saved) removeSave(this.id)
                      else onSave(videoDetails)
                    }
                    return (
                      <TransparentButton dark={dark} active={saved} onClick={saveVideo}>
                        <FiSave /> {saved ? 'Saved' : 'Save'}
                      </TransparentButton>
                    )
                  }}
                </SavedVideoContext.Consumer>
              </div>
            </JustifyBetween>
            <HR />
            <Flex>
              <div>
                <ChannelLogo
                  alt={videoDetails.channel.name}
                  src={videoDetails.channel.profileImageUrl}
                />
              </div>
              <div>
                <ChannelName>{videoDetails.channel.name}</ChannelName>
                <SubscriberCount dark={dark}>
                  {videoDetails.channel.subscriberCount}&nbsp;subscribers
                </SubscriberCount>
                <p>{videoDetails.description}</p>
              </div>
            </Flex>
          </VideoDiv>
        )

      case apiStatusConstants.failure:
        return (
          <ScreenCenterDiv>
            <Image
              noVideo
              src={
                dark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <H1 dark={dark}>Oops! Something Went Wrong</H1>
            <P dark={dark}>
              We are having some trouble to complete your request.
            </P>
            <P dark={dark}>Please try again.</P>
            <Button onClick={this.fetchVideo} retry>
              Retry
            </Button>
          </ScreenCenterDiv>
        )

      case apiStatusConstants.inProgress:
        return (
          <ScreenCenterDiv className="loader-container" data-testid="loader">
            <StyledLoader
              dark={dark}
              type="ThreeDots"
              color="#ffffff"
              height="50"
              width="50"
            />
          </ScreenCenterDiv>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => (
          <Layout data-testid="videoItemDetails" dark={value.dark}>
            {this.renderVideo(value.dark)}
          </Layout>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
