import styled from "styled-components";
import Not404 from "../assets/images/404.svg";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <img src={Not404} alt="Not found" />
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 251px;
`;
export default NotFound;
