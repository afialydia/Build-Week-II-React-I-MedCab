import React from "react";
import { Link } from "react-router-dom";
import { Title } from "./Styles";
import styled from "styled-components";

export default function Header() {
  return (
    <header className="ui centered">
        <Title className="ui center">Header.JS HEADER</Title>
        <StyledLink to="/">Take Me Back to Form?</StyledLink>
    </header>
  );
}

const StyledLink = styled(Link) `
  text-decoration: none;
  color: black;
  margin: 20px;
`;