import React from "react";
import { Wrapped } from "./Styles";
import ProfileTitle from "./ProfileTitle";
import { One, Button, Info } from "./Styles";



const ProfileCard = (props) => {

  return (
    <Wrapped>
        <ProfileTitle />
        <One className= "recommendation-one">
            <Info>Strain: {props.strain}</Info>                                              
            <Info>Genetic Attribute: {props.type}</Info>                  
            <Info>Effects: {props.effects}</Info>      
            <Button>Delete Selection</Button>
        </One>
    </Wrapped>
  );
}

export default ProfileCard;