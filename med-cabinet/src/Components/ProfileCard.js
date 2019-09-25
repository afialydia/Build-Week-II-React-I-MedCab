import React from "react";
// import Axios from "./axios";
import { Wrapper } from "./Styles";
import ProfileTitle from "./ProfileTitle";
import RecCards from "./RecCards"; //Can remove later once axios is done!


const ProfileCard = ({ favorites }) => {
  
  // array of favorite strains is now being passed to this component as props: to test this, first visit
  // /search route and enter a test search, then click some strains. Click the 'profile' link on the left
  // of the screen to return back here. The console.log statement below will log the strains

  console.log(favorites)
  
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


