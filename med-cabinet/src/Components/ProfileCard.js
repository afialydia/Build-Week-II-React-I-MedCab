import React from "react";
// import Axios from "./axios";
import { Wrapper } from "./Styles";
import ProfileTitle from "./ProfileTitle";
import RecCards from "./RecCards"; //Can remove later once axios is done!


const ProfileCard = () => {
  return (
    <Wrapper>
        <ProfileTitle />
        <RecCards /> 
        {/* <Axios /> */}
    </Wrapper>
  );
}

export default ProfileCard;


