import React from "react";
import RecCards from "./RecCards";
import { Wrapper } from "./Styles";

const ProfileCard = ({ favorites }) => {
  console.log(favorites);
  return (
    <>
    <Wrapper>

        <RecCards />
    </Wrapper>
  </>
  )
}

export default ProfileCard;