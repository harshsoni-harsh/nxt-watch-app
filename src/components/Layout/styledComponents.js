import styled from 'styled-components'

export const Image = styled.img`
  height: 25px;
  pointer-events: none;
  ${(props) => (props.logo ? "height: 40px;" : "")}
  ${(props) =>
    !props.icon ? "" : props.dark ? "filter: invert(1);" : ""}
`;
export const Button = styled.button`
  ${(props) =>
    props.icon
      ? "background: transparent; cursor: pointer; padding: 0px; margin: 0; border: none; outline: none;"
      : props.logout
      ? "background: transparent; border: 2px solid #3b82f6; border-radius: 2px; color: #3b82f6; font-weight: bold; padding: 5px 10px; height: fit-content;"
      : ""}
`;
export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
  background-color: ${(props) => (props.dark ? "black" : "white")};
`;
export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const OuterContainer = styled.div``
export const Body = styled.div`
  display: flex;
`