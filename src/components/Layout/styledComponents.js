import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";

export const Image = styled.img`
  height: 25px;
  pointer-events: none;
  ${(props) => (props.logo ? "height: min(40px, 100%); max-width: 8em;" : "")}
  ${(props) => (!props.icon ? "" : props.dark ? "filter: invert(1);" : "")}
  @media (max-width: 767px) {
    ${(props) => (props.profile ? "display: none;" : "")}
  }
`;
export const Button = styled.button`
  background: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  ${(props) =>
    props.logout && props.dark
      ? "border: 1px solid #ebebeb; border-radius: 2px; color: #ebebeb; font-weight: 600; padding: 8px 15px; height: fit-content;"
      : props.logout
      ? "border: 2px solid #3b82f6; border-radius: 2px; color: #3b82f6; font-weight: bold; padding: 8px 15px; height: fit-content;"
      : props.logoutIcon || props.hamburger
      ? "display: none; font-size: 24px;"
      : ""}
  @media (max-width: 767px) {
    ${(props) =>
      props.logout
        ? "display: none"
        : props.logoutIcon || props.hamburger
        ? "display: block"
        : ""}
  }
`;
export const NavContainer = styled.div`
  width: 100%;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
  background-color: ${(props) => (props.dark ? "#212121" : "white")};
  @media (max-width: 576px) {
    padding: 10px;
  }
`;
export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 767px) {
    gap: 12px;
  }
`;
export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;
export const Body = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  ${(props) => (props.dark ? "background-color: #212121;" : "")}
`;
export const StyledHamburger = styled(GiHamburgerMenu)`
  ${(props) => props.dark && "color: #ebebeb;"}
`;
export const StyledLogout = styled(FiLogOut)`
  ${(props) => props.dark && "color: #ebebeb;"}
`;
