import React from "react";
import { Wrapped } from "./Styles";
import ProfileTitle from "./ProfileTitle";

const ProfileCard = ({ favorites, setFavorites }) => {

  return (
    <Wrapped>
        <ProfileTitle />
        {favorites.map(favorite => <RecCards data={favorite} favorites={favorites} setFavorites={setFavorites}></RecCards>)}
    </Wrapped>
  );}

export default ProfileCard;


