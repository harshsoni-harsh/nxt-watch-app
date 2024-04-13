import { formatDistance, parse } from "date-fns";

import ThemeContext from "../../context/ThemeContext";
import {
  Li,
  StyledLink,
  ThumbnailImage,
  VideoDetails,
  VideoTitle,
  ChannelName,
  VideoStats,
  VideoStatDiv,
  ChannelLogo,
  ForSmall,
} from "./styledComponents";

const TrendingVideo = (props) => {
  const { details } = props;
  const { channel, id, publishedAt, thumbnailUrl, title, viewCount } = details;
  const { name, profileImageUrl } = channel;

  return (
    <ThemeContext.Consumer>
      {(value) => (
        <Li>
          <StyledLink to={"/video/".concat(id)}>
            <div>
              <ThumbnailImage src={thumbnailUrl} alt={title} />
            </div>
            <VideoDetails>
              <ChannelLogo src={profileImageUrl} alt={name} />
              <div>
                <VideoTitle dark={value.dark}>{title}</VideoTitle>
                <VideoStatDiv dark={value.dark}>
                  <ChannelName>{name}</ChannelName>
                  <ForSmall> &nbsp;•&nbsp; </ForSmall>
                  <VideoStats>{viewCount}&nbsp;views&nbsp;•&nbsp;</VideoStats>
                  <VideoStats>
                    {formatDistance(
                      parse(publishedAt, "MMM d, y", new Date()),
                      new Date()
                    )}
                  </VideoStats>
                </VideoStatDiv>
              </div>
            </VideoDetails>
          </StyledLink>
        </Li>
      )}
    </ThemeContext.Consumer>
  );
};

export default TrendingVideo;
