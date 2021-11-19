import styled, {keyframes} from "styled-components";


export const Container = styled.section`
    height:75vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#1a1a1a;

`


export const Cards = styled.img`
    width:15vw;
    height:35vh;
    cursor:pointer;
    position:relative;
    transition: 1s ease-in-out;
    top:20px;
    &:hover{
        -webkit-box-shadow: 0px 10px 13px -7px #FFD700, 5px 5px 15px 5px rgba(0,0,0,0); 
        box-shadow: 0px 10px 13px -7px #FFD700, 5px 5px 15px 5px rgba(0,0,0,0);
    }
    
`

export const BtnDescribe = styled.button`
    font-size:15px;
    cursor: pointer;
    font-family:Arial;
    width:140px;
    height:50px;
    border-width:1px;
    color:#333333;
    margin-top:6vh;
    margin-left:2vw;
    border-color:#ffaa22;
    font-weight:bold;
    border-top-left-radius:6px;
    border-top-right-radius:6px;
    border-bottom-left-radius:6px;
     border-bottom-right-radius:6px;
    box-shadow: 0px 1px 0px 0px #fff6af;
    text-shadow: 0px 1px 0px #ffee66;
     background:linear-gradient(#ffec64, #ffab23);
  &:hover{
    background: linear-gradient(#ffab23, #ffec64);
  }
   
`

export const ContainerSec = styled.section`
background-image: url(${props => props.back});
background-attachment:scroll;
background-repeat:no-repeat;
background-size:cover;
width:100%;
height:120vh;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;

` 

export const BoxTitle = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    padding-left:3vw;
    padding-top:1vh;

    h2{
        font-size:3vw;
        font-weight:800;
        width:50%;
        margin-bottom:8vh;
        font-family:'limelight', source sans pro;
        color: #FEAF02;;
        
        text-shadow: 4px 3px 0 #7A7A7A;
         }
    p{
        width:50%;
        font-size:1.9vw;
        font-family:'Roboto Mono', sans-serif;
        font-weight:100;
        margin-left:1vw;
        color: #000000	; 
        text-transform:capitalize;
        text-shadow: 0 0 10px orange;
    }
`

export const BoxList = styled.ul`
       display:flex;
    flex-direction:column;
    justify-content:center;
    padding-left:3vw;
    font-family:  'Roboto Mono', sans-serif;
    font-weight:400;
    margin-top:9vh;
    padding-left:5.5vw;
    color: #000000; 
    text-shadow: 0 0 10px orange;
    text-transform:capitalize;
    font-size:1.7vw;
`
export const TitleVideos = styled.h2`
    color:#fff;
    text-align:center;
    padding-top:3vh;
    font-family: 'limelight', source sans pro;

`

export const BoxVideo = styled.div`
    display:flex;
    width: 100%;
    height:60vh;
    align-items:center;
    justify-content:space-evenly;
   
    

    iframe{
        width:31vw;
        height:40vh;
        border:none;
    }

    p{
      color:#fff;
      text-align:center;
      margin-top:2vh;
      font-family:'Roboto Mono', sans-serif;
    }

`