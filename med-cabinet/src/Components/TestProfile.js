import React from "react";
import { Wrapped } from "./Styles";
import RecCards from './RecCards';
import ProfileTitle from "./ProfileTitle";

const TestProfile = ({ favorites, setFavorites }) => {

  return (
    <Wrapped>
        <ProfileTitle />
        {favorites.map(favorite => <RecCards data={favorite} favorites={favorites} setFavorites={setFavorites}></RecCards>)}
    </Wrapped>
  );}

export default TestProfile;
