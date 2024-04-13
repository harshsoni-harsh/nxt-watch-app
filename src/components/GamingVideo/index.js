import ThemeContext from "../../context/ThemeContext";
import {
  Li,
  StyledLink,
  ThumbnailImage,
  VideoDetails,
  VideoTitle,
  VideoStats,
  VideoStatDiv,
} from "./styledComponents";

const TrendingVideo = (props) => {
  const { details } = props;
  const { id, thumbnailUrl, title, viewCount } = details;

  return (
    <ThemeContext.Consumer>
      {(value) => (
        <Li>
          <StyledLink to={"/video/".concat(id)}>
            <div>
              <ThumbnailImage src={thumbnailUrl} alt={title} />
            </div>
            <VideoDetails>
              <VideoTitle dark={value.dark}>{title}</VideoTitle>
              <VideoStatDiv dark={value.dark}>
                <VideoStats>{viewCount}&nbsp;Watching Worldwide</VideoStats>
              </VideoStatDiv>
            </VideoDetails>
          </StyledLink>
        </Li>
      )}
    </ThemeContext.Consumer>
  );
};

export default TrendingVideo;
