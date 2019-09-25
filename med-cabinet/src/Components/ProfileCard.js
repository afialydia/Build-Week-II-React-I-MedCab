import React from "react";
import RecCards from "./RecCards";
import { Wrapper } from "./Styles";

const ProfileCard = ({ favorites }) => {
  
  // array of favorite strains is now being passed to this component as props: to test this, first visit
  // /search route and enter a test search, then click some strains. Click the 'profile' link on the left
  // of the screen to return back here. The console.log statement below will log the strains

  console.log(favorites)
  
  return (
    <>
    <Wrapper>

        <RecCards />
    </Wrapper>
  </>
  )
}

export default ProfileCard;