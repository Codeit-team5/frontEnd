import React from 'react';
import styled from 'styled-components';

const GroupCard = () => {
  return (
    <Container>
      <MainContent>
        <MainImage src="images/img2.svg" alt="Family" />

        <ContentWrapper>
          <Header>
            <HeaderInfo>
              <Date>D+265</Date>
              <Status>공개</Status>
              <button>그룹 정보 수정하기</button>
              <button>그룹 삭제하기</button>
            </HeaderInfo>
            <Title>달봉이네 가족 달봉이네 가족 어디까지 길어지는 거예요?? 글자수 제한 한 줄까지</Title>
            <Description>
              서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다. 서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다. 서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다. 그냥 끝까지로 할게요 그리고 두 줄까지만!
            </Description>
          </Header>

          <Badges>
            <img src="badges/badge1.png"></img>
            <img src="badges/badge2.png"></img>
            <img src="badges/badge3.png"></img>
          </Badges>
        </ContentWrapper>

        <Actions>
          <ActionButton>공감 보내기</ActionButton>
        </Actions>
      </MainContent>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;  /* 이미지와 텍스트를 수직 중앙 정렬 */
`;

const MainImage = styled.img`
  width: 30%;
  border-radius: 10px;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-left: 20px; /* 이미지와 텍스트 사이의 간격 */
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Date = styled.span`
  font-size: 14px;
  color: #666;
`;

const Status = styled.span`
  font-size: 14px;
  color: #666;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* 줄바꿈을 방지 */
  width: 10000px; /* 적절한 너비 설정 */
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  max-height: 3em; /* 두 줄의 최대 높이 */
  white-space: nowrap; /* 한 줄로 표시하지 않기 위해 사용 */
  overflow: hidden; /* 내용이 넘치면 숨기기 */
  text-overflow: ellipsis; /* 넘친 부분에 ... 표시 */
`;

  


const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Badge = styled.div`
  background-color: #f4f4f4;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;
`;

const Actions = styled.div`
  margin-left: 20px;  /* ContentWrapper와 Actions 사이의 간격 */
`;

const ActionButton = styled.button`
  background-color: #f4f4f4;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  color: #333;
  
`;

export default GroupCard;
