import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

const SIZES = {
  large: css`
    width: 400px;
    height: 50px;
    padding: 15px 178px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20.03px;
    white-space: nowrap;
    cursor: pointer;
  `,
  medium: css`
    width: 200px;
    height: 45px;
    padding: 13px 67px;
    font-size: 14px;
    font-weight: 700;
    line-height: 17.53px;
    white-space: nowrap;
    cursor: pointer;
  `,
};

function Button({ size, children }) {
  const sizeStyle = SIZES[size];
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <StyledButton sizeStyle={sizeStyle} onClick={handleClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${p => p.sizeStyle}

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: #282828;
  color: #fafafa;
  letter-spacing: -0.03em;
  text-align: center;
  font-family: Spoqa Han Sans Neo;
`;

export default Button;
