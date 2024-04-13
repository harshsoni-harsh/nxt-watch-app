import { Component } from "react";
import Cookies from "js-cookie";
import { formatDistance, parse } from "date-fns";
import { BiDislike, BiLike } from "react-icons/bi";
import { FiSave } from "react-icons/fi";

import ThemeContext from "../../context/ThemeContext";
import Layout from "../Layout";
import {
  Button,
  H1,
  Image,
  P,
  ScreenCenterDiv,
  StyledLoader,
} from "../Home/styledComponents";
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
  StyledReactPlayer
} from "./styledComponents";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};
class Video extends Component {
  state = { videoDetails: {}, apiStatus: apiStatusConstants.failure };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.id = id;
    this.fetchVideo(id);
  }

  fetchVideo = async (id) => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
      videoDetails: {},
    });
    const jwtToken = Cookies.get("jwt_token");
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(
      "https://apis.ccbp.in/videos/".concat(id),
      options
    );
    if (response.ok) {
      const data = await response.json();
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
      };
      this.setState({ videoDetails, apiStatus: apiStatusConstants.success });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  renderVideo = (dark) => {
    const { videoDetails, apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return (
          <VideoDiv dark={dark}>
            <StyledReactPlayer width="100%" url={videoDetails.videoUrl} />
            <VideoTitle dark={dark}>{videoDetails.title}</VideoTitle>
            <JustifyBetween>
              <div>
                <VideoStats>
                  {videoDetails.viewCount}&nbsp;views&nbsp;•&nbsp;
                </VideoStats>
                <VideoStats>
                  {formatDistance(
                    parse(videoDetails.publishedAt, "MMM d, y", new Date()),
                    new Date()
                  )}
                </VideoStats>
              </div>
              <div>
                <TransparentButton>
                  <BiLike /> Like
                </TransparentButton>
                <TransparentButton>
                  <BiDislike /> Dislike
                </TransparentButton>
                <TransparentButton>
                  <FiSave /> Save
                </TransparentButton>
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
        );

      case apiStatusConstants.failure:
        return (
          <ScreenCenterDiv>
            <Image
              noVideo
              src={
                dark
                  ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                  : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              }
              alt="no videos"
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
        );

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
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {(value) => <Layout>{this.renderVideo(value.dark)}</Layout>}
      </ThemeContext.Consumer>
    );
  }
}

export default Video;
