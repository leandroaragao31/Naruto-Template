import styled from "styled-components";

export const Container = styled.section`
    height:13vh;
    background-color:#1a1a1a;
    display:flex;
    justify-content:space-evenly;
    align-items:center;

`

export const Logo = styled.img`
    width:100px;
    height:50px;

`

export const Menu = styled.nav`
    width:70%;
    position:relative;
    
    ul{
        display:flex;
        justify-content:space-evenly;
        list-style:none;
        align-items:center;
        
    }

    a{
        text-decoration:none;
        color: #fff;
        font-family: 'limelight', source sans pro;
        font-weight:700;
        &:hover{
            color:#DAA520

        }
    }
`

export const ContainerImg = styled.div`
background-image: url(${props => props.back});
background-attachment:scroll;
background-repeat:no-repeat;
background-size:cover;
height:85vh;
width:100%;
`

export const BoxText = styled.div`
    display:flex;
    border:solid;
    flex-direction:column;
    padding:2vw;
    justify-content:space-evenly;
    align-items:flex-start;
    height:100%;
    
    h1{
        font-family: 'limelight', source sans pro;
        font-weight:700;
        background-image: linear-gradient(0deg, #f00 25%, #ffb300 60%);
        color: #0000;
        -webkit-background-clip: text;
         background-clip: text;
        font-size: 50px;
        font-weight: bold;
        display: inline-block;
       
    }

    h2{
        opacity:0.9;
        letter-spacing:2px;
        font-family: 'Cabin', serif;
        font-size:2vw;
        color:#363636;
    }

    p{
        width:30%;
        font-size:1.5\vw;
        font-family:'Roboto Mono', serif;
        font-weight:100;
        text-align:justify;
        color:#4F4F4F;
    }
    

    button{
        box-shadow: 0px 1px 0px 0px #fff6af;
	    background:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
	    background-color:#ffec64;
	    border-radius:6px;
	    border:1px solid #ffaa22;
	    color:#333333;
	    font-weight:bold;
	    padding:6px 24px;
	    text-decoration:none;
	    text-shadow:0px 1px 0px #ffee66;   
        transition: 2s ease-in-out;
        width:15vw;
        height:11vh;
        cursor: pointer;
        font-size:1.4vw;
        font-family: 'Cabin', sans-serif;
        &:hover{
            background:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
	        background-color:#ffab23;
        }

        &:active{
            position:relative;
	        top:1px;
        }

    }
`
