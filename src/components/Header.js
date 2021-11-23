import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HeaderLogo from './HeaderLogo';

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <HeaderLogo />
      </Link>

      <LinksContainer>
        <StyledLink to="/search?value=javascript">
          Search
        </StyledLink>

        <StyledLink to="#how-it-works">How it works</StyledLink>

        <StyledLink to="#about">About</StyledLink>
      </LinksContainer>

    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinksContainer = styled.nav`
font-weight: bold;
display: flex;
align-items: center;
> * {
  margin-right: 3rem;
  }
`;

const StyledLink = styled(Link)`
  font-family: 'Montserrat';
  color: ${(props) => props.theme.text.secondary};
  text-decoration: none;
  :visited {
    color: ${(props) => props.theme.text.secondary};
  }
`;
