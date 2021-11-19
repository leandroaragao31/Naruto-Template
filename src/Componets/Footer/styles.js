import styled from "styled-components";

export const Container = styled.section`
    height:63vh;
    background-color:#FEAF02;
    display:flex;
    align-items:center;

`
export const BoxInformations = styled.div`
    display:flex;
    height:40vh;
    width:80%;
    align-items:center;
    justify-content:space-evenly;
    margin-left:15vw;
    
    h2{
        font-family: 'limelight', source sans pro;
    }

    div{
        width:30%;
    }

    p{
        width:90%;
        font-family:'Malgun Gothic', serif;
        font-size:1.3vw;
        margin-top:2vh;
        

    }

`
export const BoxTitles = styled.div`
    height:25vh;
    display:flex;
    flex-direction:column;
    text-align:left;

    h2{
        font-family: 'limelight', source sans pro;
    }

    p{
        margin-top:2vh;
        font-family:'Malgun Gothic', serif;
        text-transform:capitalize;
        
    }
`

export const Logo = styled.img`
    width:10vw;
    height:20vh;
    padding:2vw;
    margin-right:2vw;
`
export const BoxList = styled.ul`
    list-style:none;
    margin-left:1.5vw;
    height:25vh;
  

    li{
        margin-top:2vh;
        font-family:'Malgun Gothic', serif;
        font-size:1.3vw;
        &:hover{
            color:red;
            font-weight:bold;
        }
      
    }

    a{
        text-decoration:none;
        color:#1a1a1a;
   

    }

`

export const BoxCopy = styled.div`
    background-color:#1a1a1a;
    height:5vh;
    display:flex;
    align-items:center;
    justify-content:center;

    p{
        color:#fff;
    }

`