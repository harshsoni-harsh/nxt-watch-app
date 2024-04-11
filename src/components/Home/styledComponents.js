import styled from "styled-components";

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Banner = styled.div`
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-position: center;
    background: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png")
      0 0 no-repeat;
    background-size: cover;
  }
  ::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: -2;
  }
  z-index: 1;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const Div = styled.div`
  padding: 15px;
`;
export const Image = styled.img`
  max-width: 120px;
`;
export const BannerContent = styled.p`
  max-width: 40%;
`;
export const Button = styled.button`
  width: fit-content;
  background-color: transparent;
  border: 1px solid #1e293b;
  color: #1e293b;
  padding: 6px 8px;
  font-weight: 500;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
  ${(props) =>
    props.close
      ? "padding: 0;margin: 0; position: absolute; left: 95%; top: 10px; border: none;"
      : props.search && props.dark
      ? "border: none; padding: 5px 15px; margin: 0; background-color: #212121; color: #555555"
      : props.search
      ? "border: none; padding: 5px 15px; margin: 0; background-color: #ebebeb;"
      : ""}
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #f8fafc;
  ${(props) => props.dark && "background-color: black;"}
`;
export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: min(100%, 300px);
  border: 1px solid #cccccc;
  ${props => props.dark ? "border-color: #666666;" : ""}
  `;
export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 5px 10px;
  background-color: transparent;
  border-right: 1px solid #cccccc;
  ${props => props.dark ? "border-color: #666666;" : ""}
`;
export const SearchResults = styled.ul`
  list-style: none;
  padding: 0;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
`;
