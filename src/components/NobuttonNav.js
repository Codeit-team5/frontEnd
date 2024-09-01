import React from "react";
import styled from "styled-components";
import logoImg from "../images/logo.svg";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 26px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="이미지" />
    </HeaderContainer>
  );
};

export default Header;
