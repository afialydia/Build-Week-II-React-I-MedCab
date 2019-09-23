import styled from "styled-components";

//Called on Card
const Wrapper = styled.body`
    background: rgb(49, 49, 49);
    border-radius: 10px;
    padding: 20px;
    max-width: 60%;
    display: flex;
    // border: blue solid 3px;
    flex-direction: column;
    margin: 0 auto;
`
const ProfileTitle = styled.h1 `
    font-family: 'Bree Serif', serif;
    // border: red solid 5px;
    margin: 0 auto;
    height: 40px;
`

const One = styled.div `
    border: 2px solid magenta;
    margin: 40px;
    font-family: 'Open Sans', sans-serif;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
const Two = styled.div `
    border: 2px solid magenta;
    margin: 40px;
    font-family: 'Open Sans', sans-serif;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Three = styled.div `
    border: 2px solid magenta;
    margin: 40px;
    font-family: 'Open Sans', sans-serif;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1 `
    color: blue;
    font-family: 'Bree Serif', serif;
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

export { Wrapper, One, Two, Three, Title, ProfileTitle, Button };