import styled from "styled-components";
import { GiGamepad } from "react-icons/gi";

export const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px 35px;
  background-color: #f1f1f1;
  ${(props) => props.dark && "background-color: #181818;"}
  @media (max-width: 575px) {
    padding: 15px 25px;
  }
`;
export const GamingLogo = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e2e8f0;
  height: 70px;
  width: 70px;
  border-radius: 100%;
  ${(props) => props.dark && "background-color:  #0f0f0f"}
  @media (max-width: 575px) {
    height: 50px;
    width: 50px;
    padding: 10px;
  }
`;
export const Heading = styled.h1`
  color: #1e293b;
  ${(props) => props.dark && "color:  #ebebeb"}
`;
export const StyledIcon = styled(GiGamepad)`
  height: 100%;
  width: 100%;
  color: #ff0b37;
`;
export const Content = styled.div`
  background-color: #f9f9f9;
  flex-grow: 1;
  ${(props) => props.dark && "background-color:  #0f0f0f"}
`;
export const ResultItems = styled.ul`
  list-style: none;
  padding: 35px;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 575px) {
    padding: 15px;
  }
`;
