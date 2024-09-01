import { useState } from "react";
import styled from "styled-components";
import FileInput from "./FileInput";
import ToggleButton from "./ToggleButton";

function CreateGroupForm() {
  const [text, setText] = useState("");

  const handleSetValue = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <RepresentativeImgContainer>
        <RepresentativeImgText>대표 이미지</RepresentativeImgText>
        <FileInput />
        <GroupInfo>
          <label htmlFor="groupIntro" style={{ display: "block" }}>
            그룹 소개
          </label>
          <StyledTextarea
            name="groupIntro"
            id="groupIntro"
            value={text}
            onChange={handleSetValue}
            placeholder="그룹을 소개해 주세요"
          />
        </GroupInfo>
        <GroupInfo>
          <label htmlFor="groupIntro" style={{ display: "block" }}>
            그룹 공개 선택
          </label>
          <GroupOpen>
            <p>공개</p>
            <ToggleButton />
          </GroupOpen>
        </GroupInfo>
        <GroupInfo>
          <label htmlFor="groupIntro" style={{ display: "block" }}>
            비밀번호 생성
          </label>
          <CreatePassword
            name="groupIntro"
            id="groupIntro"
            value={text}
            onChange={handleSetValue}
            placeholder="그룹 비밀번호를 생성해 주세요"
          />
        </GroupInfo>
        <SubmitButton type="submit">만들기</SubmitButton>
      </RepresentativeImgContainer>
    </form>
  );
}

export default CreateGroupForm;

const RepresentativeImgContainer = styled.div`
  width: 400px;
  height: 75px;
`;

const RepresentativeImgText = styled.p`
  width: 75px;
  height: 20px;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 600;
  line-height: 20.03px;
  letter-spacing: -0.03em;
  white-space: nowrap;
  padding-bottom: 10px;
`;

const GroupInfo = styled.div`
  margin-top: 40px;
  label {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 600;
  }
`;

const StyledTextarea = styled.textarea`
  width: 400px;
  height: 100px;
  resize: none;
  border: 1px solid #dddddd;
  border-radius: 6px;
  outline: none;
  line-height: 300%;
  text-indent: 1em;

  &::placeholder {
    color: #b8b8b8;
  }
`;

const GroupOpen = styled.div`
  display: flex;
  gap: 25px;
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`;

const SubmitButton = styled.button`
  width: 400px;
  height: 50px;
  color: white;
  background-color: black;
  border-radius: 6px;
  margin-top: 60px;
  cursor: pointer;
`;

const CreatePassword = styled.textarea`
  width: 400px;
  height: 45px;
  resize: none;
  border: 1px solid #dddddd;
  border-radius: 6px;
  outline: none;
  line-height: 300%;
  text-indent: 1em;

  ::placeholder {
    color: white;
  }
`;
