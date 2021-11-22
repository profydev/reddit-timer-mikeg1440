import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
