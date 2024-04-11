import { formatDistance, parse } from "date-fns";

import ThemeContext from "../../context/ThemeContext";
import {
  Li,
  StyledLink,
  ThumbnailImage,
  VideoDetails,
  ChannelLogo,
  VideoTitle,
  ChannelName,
  VideoStats,
  VideoStatDiv,
} from "./styledComponents";

const VideoCard = (props) => {
  const { details } = props;
  const { channel, id, publishedAt, thumbnailUrl, title, viewCount } = details;
  const { name, profileImageUrl } = channel;

  return (
    <ThemeContext.Consumer>
      {(value) => (
        <Li>
          <StyledLink to={"/videos/".concat(id)}>
            <ThumbnailImage src={thumbnailUrl} alt={title} />
            <VideoDetails>
              <ChannelLogo src={profileImageUrl} alt={name} />
              <div>
                <VideoTitle dark={value.dark}>{title}</VideoTitle>
                <VideoStatDiv dark={value.dark}>
                  <ChannelName>{name}</ChannelName>
                  <VideoStats>{viewCount}</VideoStats>
                  <VideoStats>{" views • "}</VideoStats>
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

export default VideoCard;
