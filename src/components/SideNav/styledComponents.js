import styled from "styled-components";

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: fit-content;
  padding: 20px 0px 20px 0;
  max-width: 250px;
  min-height: calc(100vh - 100px);
  @media (max-width: 767px) {
    display: none;
  }
`;
export const InnerContainer = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  color: #231f20;
  font-size: 16px;
  ${(props) => (props.bottom ? "margin: 20px 0 0 20px; gap: 20px;" : "")}
`;
export const NavTab = styled.a`
  display: flex;
  align-items: center;
  font-weight: normal;
  gap: 20px;
  width: initial;
  padding: 10px 50px 10px 20px;
  text-decoration: none;
  color: #475569;
  ${(props) =>
    props.selected && props.dark
      ? "background-color: #343434; color: #ff0b37; font-weight: bold;"
      : props.selected
      ? "background-color: #e2e8f0;"
      : props.dark
      ? ""
      : ""}
`;
export const P = styled.p`
  margin: 0;
  ${(props) =>
    props.selected && props.dark
      ? "color: #f8fafc;"
      : props.selected
      ? "color: #1e293b;"
      : props.dark && props.comment
      ? "color: #cbd5e1;"
      : props.dark
      ? "color: #d7dfe9;"
      : props.comment
      ? "color: #475569;"
      : ""}
  padding: 0;
`;
export const Socials = styled.div`
  display: flex;
  gap: 10px;
`;
export const Image = styled.img`
  height: 30px;
`;
