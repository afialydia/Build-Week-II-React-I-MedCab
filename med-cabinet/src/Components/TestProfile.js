import React from "react";
import { Wrapped } from "./Styles";
import RecCards from './RecCards';
import Test from "./ProfileTitle"
import Header from "./Header";
import { ProfilePage } from "./Styles";

const TestProfile = ({ favorites, setFavorites }) => {

  console.log(favorites);

  return (
    <div>
    <ProfilePage className="Profile">
    <Header />
    <Wrapped>
        <Test />
         {favorites.map(favorite => <RecCards data={favorite} favorites={favorites} setFavorites={setFavorites}></RecCards>)}
    </Wrapped>
    </ProfilePage>

    </div>
  );}

export default TestProfile;


