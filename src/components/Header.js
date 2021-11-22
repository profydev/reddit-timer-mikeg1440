import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';

export default function Header() {
  return (
    <StyledHeader>
      <Logo />

      <LinksContainer>
        <p>Search</p>
        <a href="#how-it-works">How it works</a>
        <a href="#about">About</a>
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
