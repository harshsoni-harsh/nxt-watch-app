import styled from "styled-components";
import { Link } from "react-router-dom";

export const Li = styled.li`
    width: 200px;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  width: 100%;
  gap: 10px;
`;

export const ThumbnailImage = styled.img`
  max-width: 100%;
`;

export const VideoDetails = styled.div`
  width: 100%;
  padding-top: 5px;
  color: black;
  text-decoration: none;
  @media (max-width: 575px) {
    padding: 5px 0;
  }
`;

export const VideoTitle = styled.p`
  margin: 5px 0;
  color: #1e293b;
  font-size: 14px;
  font-weight: bold;
  ${(props) => props.dark && "color: #ebebeb;"}
`;

export const VideoStats = styled.p`
  display: inline;
  margin: 0;
  padding: 0;
`;
export const VideoStatDiv = styled.div`
  color: #475569;
  font-size: 14px;
  ${(props) => props.dark && "color: #94a3b8;"}
  @media (max-width: 575px) {
    display: flex;
    align-items: center;
  }
`;
