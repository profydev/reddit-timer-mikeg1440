import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from './Logo';

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLink as="a" target="_blank" href="https://profy.dev/employers">
        profy.dev
      </StyledLink>

      <Link to="/">
        <Logo />
      </Link>

      <StyledLink to="/terms">
        Terms & Privacy
      </StyledLink>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  margin: 1rem 5rem;
  background-color: ${(props) => props.theme.background.primary};
`;

const StyledLink = styled(Link)`
  flex: 1;
  text-align: center;
  font-family: 'Montserrat';
  color: ${(props) => props.theme.text.secondary};
  text-decoration: none;
  :visited {
    color: ${(props) => props.theme.text.secondary};
  }
`;
