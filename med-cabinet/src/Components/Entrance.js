import React from 'react';
import FormikSignIn from "./SignIn";
import FormikSignUp from "./SignUp";
import styled from "styled-components";
import '../Entrance.css'
import { Image } from "semantic-ui-react";



const EntraDiv = styled.div`
display: flex;
/* border: 4px solid white; */
width: 80%;
`;

const EntranDiv = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items:center;
justify-content: space-around;
max-width: 1000px;
height: 96vh;
border-radius: 12px;
/* border: 2px solid; */

`;


function Entrance() {
  return (

    <EntranDiv className="trial">     
      <Image className="logo" src='/Logo.png' alt="Med Cab Logo" />
    <EntraDiv>
      <FormikSignUp />
      <FormikSignIn />
    </EntraDiv>
    </EntranDiv>
  );
}

export default Entrance;
