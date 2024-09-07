import { useState } from "react";
import styled from "styled-components";
import FileInput from "./FileInput";
import ToggleButton from "./ToggleButton";
import { createReview } from "../api";
const INITIAL_VALUES = {
  name: '',
  introduction: '',
  isPublic: false,
  imgUrl:null,
  password: '',
};

function CreateGroupForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [isPublic, setIsPublic] = useState(false);

  const handleFileChange = (fileURL) => {
    handleChange('imgUrl', fileURL);
  };

  const handleToggleBtn = (newState)=>{
    setIsPublic(newState);
    handleChange('isPublic', newState);
  }

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('password', values.password);
    formData.append('isPublic', values.isPublic);
    formData.append('introduction', values.introduction);
    
    // 실제 파일을 업로드하려면
    formData.append('image', values.imgUrl); // values.imgUrl이 파일 객체일 경우

    // JSON 데이터를 서버로 전송
    const response = await fetch('https://backend-w1la.onrender.com/api/groups', {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('그룹을 생성하는데 실패했습니다.');
    }

    const body = await response.json();
    console.log('그룹 생성 성공:', body);

    setValues(INITIAL_VALUES);  // 폼 초기화
};


  return (
    <form onSubmit={handleSubmit}>
      <TitleContainer>
        <Title>그룹 만들기</Title>
      </TitleContainer>
      <RepresentativeImgContainer>
        <GroupInfo>
          <label htmlFor="title" style={{ display: "block" }}>
            그룹명
          </label>
          <textarea name="name" id="title" value={values.name} onChange={handleInputChange}></textarea>
        </GroupInfo>
        <RepresentativeImgText>대표 이미지</RepresentativeImgText>
        <FileInput onFileChange={handleFileChange} />
        <GroupInfo>
          <label htmlFor="info" style={{ display: "block" }}>
            그룹 소개
          </label>
          <StyledTextarea
            name="introduction"
            value={values.introduction}
            onChange={handleInputChange}
            placeholder="그룹을 소개해 주세요"
          />
        </GroupInfo>
        <GroupInfo>
          <label htmlFor="groupIntro" style={{ display: "block" }}>
            그룹 공개 선택
          </label>
          <GroupOpen>
            <p>공개</p>
            <ToggleButton onToggleChange={handleToggleBtn}/>
          </GroupOpen>
        </GroupInfo>
        <GroupInfo>
          <label htmlFor="createpassword" style={{ display: "block" }}>
            비밀번호 생성
          </label>
          <CreatePassword
            name="password"
            value={values.password}
            onChange={handleInputChange}
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
  height: 50px;
  margin-top: 60px;
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
  margin-top: 40px;
`;

const GroupInfo = styled.div`
  margin-top: 40px;
  label {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 600;
  }
  textarea{
    resize: none;
    width:100%;
    height:45px;
    border: 1px solid #dddddd;
    border-radius: 6px;
    outline: none;
    line-height: 300%;
    text-indent: 1em;
  }
`;

const StyledTextarea = styled.textarea`
  width: 400px;
  height:45px;
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
  width: 100%;
  height: 100%;
  color: white;
  background-color: black;
  border-radius: 6px;
  margin-top: 60px;
  cursor: pointer;
`;

const CreatePassword = styled.textarea`
  width: 400px;
  height:45px;
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

const Title = styled.p`
  width: 113px;
  height: 30px;
  font-family: Spoqa Han Sans Neo;
  font-size: 24px;
  font-weight: 700;
  line-height: 30.05px;
  letter-spacing: -0.03em;
  text-align: center;
  white-space: nowrap;
`;

const GroupNameContainer = styled.div`
  width: 400px;
  height: 75px;
  display: flex;
  flex-direction: column;
`;

const GroupNameText = styled.p`
  width: 44px;
  height: 20px;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 600;
  line-height: 20.03px;
  letter-spacing: -0.03em;
  white-space: nowrap;
  padding-bottom: 10px;
`;

const GroupNameInput = styled.input`
  width: 400px;
  height: 45px;
  border-radius: 6px;
  border: 1px solid black;
  outline: none;
  padding-left: 20px;
  box-sizing: border-box;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
