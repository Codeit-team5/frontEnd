import styled from "styled-components";
import CreateGroupForm from "../components/CreateGroupForm";

const GroupCreateContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 40px;
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

const CreateGroupPage = () => {
  return (
    <GroupCreateContainer>
      <Title>그룹 만들기</Title>
      <GroupNameContainer>
        <GroupNameText>그룹명</GroupNameText>
        <GroupNameInput type="text" />
      </GroupNameContainer>
      <CreateGroupForm />
    </GroupCreateContainer>
  );
};

export default CreateGroupPage;
