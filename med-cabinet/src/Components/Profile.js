import React from 'react';
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import { ProfilePage } from "./Styles";

function Profile({favorites}) { 

  console.log({favorites});

  return (
    <ProfilePage className="Profile">
        <Header />
        <ProfileCard props={favorites}
        />      
    </ProfilePage>
    )
}

export default Profile;

