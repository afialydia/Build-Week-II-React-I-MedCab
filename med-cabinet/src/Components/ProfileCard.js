import React from "react";
// import Axios from "./axios";
import { Wrapper } from "./Styles";
import ProfileTitle from "./ProfileTitle";
import RecCards from "./RecCards"; //Can remove later once axios is done!

const ProfileCard = ({ favorites, setFavorites }) => {
  
  return (
    <>
    <Wrapper>
        <ProfileTitle />
        {favorites.map(favorite => <RecCards data={favorite} favorites={favorites} setFavorites={setFavorites}></RecCards>)}
        {/* <Axios /> */}
    </Wrapper>
  </>
  )
}

export default ProfileCard;


