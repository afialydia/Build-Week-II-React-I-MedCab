import React from "react";
import { Wrapped } from "./Styles";
import RecCards from './RecCards';
import ProfileTitle from "./ProfileTitle";
import Header from "./Header";
import { ProfilePage } from "./Styles";


const ProfileCard = ({ favorites, setFavorites }) => {

  return (
    <div>
    <ProfilePage className="Profile">
    <Header />
    <Wrapped>
        <ProfileTitle />
          {favorites.map(favorite => <RecCards data={favorite} favorites={favorites} setFavorites={setFavorites}></RecCards>)}
    </Wrapped>
    </ProfilePage>

    </div>
  );}

export default ProfileCard;


