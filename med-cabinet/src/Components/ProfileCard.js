import React from "react";
// import Axios from "./axios";
import { Wrapper } from "./Styles";
import ProfileTitle from "./ProfileTitle";
import RecCards from "./RecCards"; //Can remove later once axios is done!

// {favorites.map(favorite => <RecCards data={favorite} />)}

const ProfileCard = ({ favorites }) => {
  
  return (
    <>
    <Wrapper>
        <ProfileTitle />
        <RecCards /> 
        {/* <Axios /> */}
    </Wrapper>
  </>
  )
}

export default ProfileCard;


