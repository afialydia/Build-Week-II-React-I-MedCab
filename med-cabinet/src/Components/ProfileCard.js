import React from "react";
import { Wrapped } from "./Styles";
import RecCards from './RecCards';
import Test from "./ProfileTitle"

const ProfileCard = ({ favorites, setFavorites }) => {

  return (
    <Wrapped>
        <Test />
        {favorites.map(favorite => <RecCards data={favorite} favorites={favorites} setFavorites={setFavorites}></RecCards>)}
    </Wrapped>
  );}

export default ProfileCard;


