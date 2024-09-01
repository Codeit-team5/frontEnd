import logoImg from "../images/logo.svg";
import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const NavContainer = styled.nav`
  width: 100%;
  height: 100px;
  background-color: white;
  box-sizing: border-box;
`;

const Content = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 180px;
`;

const Logo = styled.div`
  background-image: url(${logoImg});
  background-repeat: no-repeat;
  background-size: contain;
  width: 137px;
  height: 48px;
  margin-top: 26px;
  cursor: pointer;
  margin-left: 730px;
`;

const CreateGroup = styled.div`
  margin-top: 26px;
`;

function Nav() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <NavContainer>
      <Content>
        <Logo onClick={handleClick} />
        <CreateGroup>
          <Button size="medium">그룹 만들기</Button>
        </CreateGroup>
      </Content>
    </NavContainer>
  );
}

export default Nav;
