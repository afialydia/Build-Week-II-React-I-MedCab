import styled from "styled-components";
import img from '../img/background.jpg';



//****RECCARDS.JS
const One = styled.div `
    margin: 10px 15%;
    width: 70%;
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: center;    
    border: 3px solid rgb(13,112,121);
    background: rgb(206,212,182,.6);
    border-radius:12px;   
`;
const Info = styled.p `
    font-family: 'Open Sans', sans-serif;
    // border: dashed 3px orange; 
    width: 75%;
    text-align: center;
    line-height: 20px;
    // color: rgb(13,112,121);
    color: black;
`
const Button = styled.button `
    border-radius: 5px;
    margin: 5px;
    width: 150px;
    color: rgb(13,112,121);
    font-family: 'Open Sans', sans-serif;
    display: flex;
    justify-content: center;
`


//****PROFILECARD.JS
const ProfilePage = styled.div `
    // border: dotted orange 3px;
    background-size: cover;
    background-image: url(${img});
    background-repeat: no-repeat;
    border-radius: 12px;
    max-width: 1000px;
    margin: 0 auto;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    padding-bottom: 60px;
`
const Wrapped = styled.div`   
    background: black;
    // border: dashed hotpink 3px;          
    border-radius: 10px;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;                  
    height: 20%;
    padding: 50px;
`



//********HEADER.JS
const ImageTweak = styled.div `
    border: solid 4px black;
    // border: solid 4px red;
    background: rgb(13,112,121);
    width: 30%;
    padding: 15px;
    display: flex;
    justify-content: center;
    margin: 20px 30%;
`

//**********PROFILETITLE.JS
const ProfileTitle = styled.h1 `
    font-family: 'Bree Serif', serif;
    margin: 0 auto;
    width: 70%;
    height: 90px;
    text-align: center;
    // border: green solid 2px;
`

export { Wrapped, One, ProfileTitle, Button, Info, ImageTweak, ProfilePage };