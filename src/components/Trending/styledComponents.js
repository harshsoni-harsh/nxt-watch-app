import styled from "styled-components";
import { FaFireAlt } from "react-icons/fa";

export const OuterContainer = styled.div`
  width: 100%;
  overflow: auto;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px 35px;
  background-color: #f1f1f1;
`;
export const TrendingLogo = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e2e8f0;
  height: 70px;
  width: 70px;
  border-radius: 100%;
`;
export const Heading = styled.h1`
  color: #1e293b;
`;
export const StyledIcon = styled(FaFireAlt)`
  height: 100%;
  width: 100%;
  color: #ff0b37;
`;
export const Content = styled.div`
  background-color: #f9f9f9;
  height: 100%;
`;