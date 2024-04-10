import styled from "styled-components";

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: fit-content;
  padding: 20px 0px 20px 0;
  max-width: 250px;
  min-height: calc(100vh - 100px);
  `;
export const InnerContainer = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  color:  #231f20;
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
  border-radius: 0 5px 5px 0;
  text-decoration: none;
  color: #475569;
  ${(props) =>
    props.selected
      ? "background-color: #e2e8f0; color: #ff0b37; font-weight: bold;"
      : ""}
`;
export const P = styled.p`
  margin: 0;
  ${(props) => (props.selected ? "color: #1e293b;" : "")}
  padding: 0;
  ${(props) =>
    props.comment ? "color: #475569;" : ""}
`;
export const Socials = styled.div`
  display: flex;
  gap: 10px;
`;
export const Image = styled.img`
  height: 30px;
`;
