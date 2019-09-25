import React from "react";
import UserData from "./UserData";
import { Wrapped } from "./Styles";
import ProfileTitle from "./ProfileTitle";



const ProfileCard = () => {
  
  return (
    <Wrapped>
        <ProfileTitle />
        <UserData />
    </Wrapped>
  );
}

export default ProfileCard;


