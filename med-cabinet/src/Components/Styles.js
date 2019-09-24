import styled from "styled-components";

//Called on ProfileCard.js to style the entire card where each rec card is rendered
const Wrapper = styled.body`
    background: rgb(49, 49, 49);
    border-radius: 10px;
    max-width: 60%;
    display: flex;
    flex-direction: column;
    margin: 50px 15%;
    z-index: -1;
    position: relative;
    top: 175px;
    height: 90%;
    padding: 50px;
`

//Called on Header.js to style the image logo
const ImageTweak = styled.div `
    border: solid 4px rgb(49, 49, 49);
    background: rgb(13,112,121);
    z-index: 1;
    width: 350px;
    padding: 10px;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 60px;
    left: 60px;
`

//Called on ProfileCard.js to style the h1 recommendations title
const ProfileTitle = styled.h1 `
    font-family: 'Bree Serif', serif;
    // border: red solid 5px; 
    font-size: 1 rem;
    margin: 0 auto;
    width: 40%;
    height: 90px;
    text-align: center;
`

//Called on RecCards.js to style third recommendation card
const One = styled.div `
    border: 2px solid rgb(13,112,121);
    margin: 10px 12%;
    width: 70%;
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: center;    
`

//Called on RecCards.js to style second recommendation card
const Two = styled.div `
    border: 2px solid rgb(13,112,121);
    margin: 10px 12%;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;    
    line-height: 20px;
    padding: 20px;
`

//Called on RecCards.js to style third recommendation card
const Three = styled.div `
    border: 2px solid rgb(13,112,121);
    margin: 0 auto;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;    
    padding: 20px;
    line-height: 20px;
`

//Called on RecCards.js to style the h3 props/rendered data
const Info = styled.p `
    font-family: 'Open Sans', sans-serif;
    // border: dashed 3px orange; //here for testing purposes
    width: 75%;
    text-align: center;
    line-height: 20px;
`

//Called on Header.js to style the Page Title 
const Title = styled.h1 `
    color: blue;
    font-family: 'Bree Serif', serif;
`

//Called on RecCards.js to style save/delete buttons
const Button = styled.button `
    border-radius: 5px;
    margin: 5px;
    width: 150px;
    color: rgb(13,112,121);
    font-family: 'Open Sans', sans-serif;
    display: flex;
    justify-content: center;
`

export { Wrapper, One, Two, Three, Title, ProfileTitle, Button, Info, ImageTweak };