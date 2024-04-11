import styled from "styled-components";
import { Link } from "react-router-dom";

export const Li = styled.li`
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const ThumbnailImage = styled.img`
  width: 280px;
  max-width: 100%;
`;

export const VideoDetails = styled.div`
  display: flex;
  gap: 5px;
  padding-top: 5px;
  color: black;
  text-decoration: none;
  width: 280px;
  max-width: 100%;
`;

export const ChannelLogo = styled.img`
  max-width: 40px;
  height: 100%;
  margin-top: 5px;
`;

export const VideoTitle = styled.p`
  margin: 5px 0;
  ${(props) => props.dark && "color: #ebebeb;"}
`;

export const ChannelName = styled.p`
  margin: 5px 0;
`;
export const VideoStats = styled.p`
  display: inline;
`;
export const VideoStatDiv = styled.div`
  color: #475569;
  font-size: 14px;
  ${props => props.dark && "color: #94a3b8;"}
`;
