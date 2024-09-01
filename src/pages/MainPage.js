import styled from "styled-components";
import GroupList from "./Content";
import items from "../mock.json";
import MoreButton from "../components/More";
import SecondNav from "../components/SecondNav";

const GroupContainer = styled.div`
  margin-top: 20px;
  padding: 0 180px;
`;

function Mainpage() {
  return (
    <>
      <SecondNav />
      <GroupContainer>
        <GroupList items={items} />
        <MoreButton />
      </GroupContainer>
    </>
  );
}

export default Mainpage;
