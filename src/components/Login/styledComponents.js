import styled from "styled-components";
export const OuterDiv = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.dark ? "#181818" : "white")};
`;
export const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 10px;
  padding: 40px;
  ${
    props => props.dark ? "background-color: black; " : "box-shadow: 0px 0px 30px #e2e8f0;"
  }
  
`;
export const Image = styled.img`
  margin-bottom: 20px;
  max-width: 60%;
  align-self: center;
`;
export const Label = styled.label`
    color: ${props => props.dark ? "white" : "#94a3b8" };
    font-weight: bold;
    font-size: 14px;
    margin-top: 12px;
    margin-bottom: 5px;
`;
export const Label2 = styled(Label)`
    color: ${props => props.dark ? "white" : "black" };
    font-weight: normal;
    padding: 0;
    margin: 0;
`
export const Input = styled.input`
    outline: none;
    padding: 5px 10px;
    color: ${props => props.dark ? "white": "black"};
    background-color: transparent;
    border: 1px solid #475569;
    border-radius: 5px;
`;
export const ShowPassword = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0;
`;
export const Button = styled.button`
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: #3b82f6;
    color: white;
    font-weight: bold;
    margin-top: 10px;
    padding: 10px;
`;
export const ErrorMsg = styled.p`
    color: red;
    padding: 0;
    margin: 0;
`