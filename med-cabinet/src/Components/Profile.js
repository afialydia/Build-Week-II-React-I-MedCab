import React from 'react';
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import { ProfilePage } from "./Styles";
import { Image } from "semantic-ui-react";

function Profile() { 
  return (
    <Image src="../img/background.jpg" alt="bgimg" >
    <ProfilePage className="Profile">
        <Header />
        <ProfileCard />      
    </ProfilePage>
    </Image>
    )
}

export default Profile;
