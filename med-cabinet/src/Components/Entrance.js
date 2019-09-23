import React from 'react';
import FormikSignIn from "./SignIn";
import FormikSignUp from "./SignUp";
import styled from "styled-components";

const EntraDiv = styled.div`
display: flex;
/* background-image: url("../img/background.jpg") */
`;

const EntranDiv = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
align-items:center;
justify-content: space-between;
/* background-image: url("../img/background.jpg") */
`;


function Entrance() {
  return (

    <EntranDiv>     

    <h1>MedCabinet <i class="fas fa-cannabis"></i></h1>
    <EntraDiv>
      <FormikSignUp />
      <FormikSignIn />
    </EntraDiv>
    </EntranDiv>
  );
}

export default Entrance;
