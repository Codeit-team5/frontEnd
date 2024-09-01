// Header.jsx
import React from 'react';
import styled from 'styled-components';
//import { ReactComponent as Logo } from '../logo.svg';

// Styled Component 정의
const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 26px
  `

const Header = () => {
  return (
    <HeaderContainer>
      <img src="logo.svg" alt="logo"></img>
    </HeaderContainer>
  );
};

export default Header;
