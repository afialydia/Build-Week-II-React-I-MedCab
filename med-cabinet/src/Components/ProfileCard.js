import React from "react";
import RecCards from "./RecCards";
import { Wrapper, ProfileTitle } from "./Styles";

const ProfileCard = () => {
  return (
    <Wrapper>
        <ProfileTitle>Our Top 3 Recommendations</ProfileTitle>
        <RecCards />
    </Wrapper>
  );
}

export default ProfileCard;