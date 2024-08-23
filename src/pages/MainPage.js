import styled from "styled-components";
import Searchbox from "../components/search";
import ToggleButtons from "../components/tab";
import Dropbox from "../components/Dropdown";
import GroupList from "./Content";
import items from "../mock.json";
import MoreButton from "../components/More";

const Container = styled.div`
  display: flex;
  padding: 30px 180px;
`;
const GroupContainer = styled.div`
  margin-top: 20px;
  padding: 0 180px;
`;

function Mainpage() {
  return (
    <>
      <Container>
        <ToggleButtons />
        <Searchbox />
        <Dropbox />
      </Container>
      <GroupContainer>
        <GroupList items={items} />
        <MoreButton />
      </GroupContainer>
    </>
  );
}

export default Mainpage;
