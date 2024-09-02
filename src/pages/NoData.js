import styled from "styled-components";
import Searchbox from "../components/search";
import ToggleButtons from "../components/tab";
import Dropbox from "../components/Dropdown";
import NoDataImg from "../images/icon.svg";
import SecondNav from "../components/SecondNav";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getReviews } from "../api";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  padding-top: 200px;
`;

const NoDataIcon = styled.div`
  background-image: url(${NoDataImg});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100px;
  height: 100px;
`;

const NoGroupMessage = styled.p`
  width: 208px;
  height: 23px;
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-weight: 700;
  line-height: 22.54px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #8d8d8d;
  white-space: nowrap;
  padding-right: 20px;
`;

const CreateGroupMessage = styled.p`
  width: 175px;
  height: 18px;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.53px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #b8b8b8;
  white-space: nowrap;
  padding-right: 10px;
  padding-bottom: 150px;
`;

const NoData = () => {
  const [items, setItems] = useState([]);
  const handleLoadClick = async () => {
    const { reviews } = await getReviews();
    setItems(reviews);
  };
  return (
    <>
      <SecondNav>
        <ToggleButtons />
        <Searchbox />
        <Dropbox />
      </SecondNav>
      <button onClick={handleLoadClick}>불러오기</button>
      <Container>
        <NoDataIcon />
        <NoGroupMessage>등록된 공개 그룹이 없습니다.</NoGroupMessage>
        <CreateGroupMessage>가장 먼저 그룹을 만들어보세요!</CreateGroupMessage>
        <Link to="/CreateGroup" style={{ textDecoration: "none" }}>
          <Button size="large">그룹 만들기</Button>
        </Link>
      </Container>
    </>
  );
};

export default NoData;
