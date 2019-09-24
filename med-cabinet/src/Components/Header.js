import React from "react";
import { Image } from "semantic-ui-react";
import { ImageTweak, ProfileTitle } from "./Styles";

export default function Header() {
  return (
    <ImageTweak>
        <Image src='/Logo.png' alt="Med Cab Logo" />
    </ImageTweak>
    
  );
}