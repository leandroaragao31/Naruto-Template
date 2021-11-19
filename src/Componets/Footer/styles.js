import styled, {keyframes} from "styled-components";

export const Container = styled.section`
    height:80vh;
    background-color:#FEAF02;
    display:flex;

`
export const BoxInformations = styled.div`
    display:flex;
    align-items:center;

`

export const Logo = styled.img`
    width:15vw;
    height:30vh;
    padding:2vw;
    animation: ${rotate} 1.5s infinite  normal;

`

const rotate = keyframes`
    from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;