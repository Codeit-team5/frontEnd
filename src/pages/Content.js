import styled from "styled-components";
import { useState } from "react";
import SmallFlower from "../images/SmallFlower.svg";
import { Link } from "react-router-dom";
const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  box-sizing: border-box;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #dddddd;
  border-radius: 12px;
  height: 661px;
`;

const CardImg = styled.img`
  width: 335px;
  height: auto;
  display: block;
  padding: 18px;
`;

const CardTitle = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 700;
  font-size: 16px;
  font-style: normal;
  line-height: 20px;
  letter-spacing: -0.03em;
  color: #282828;
  padding-bottom: 10px;
  margin: 0;
`;

const Cardtext = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.03em;
  color: #282828;
  width: 350px;
  margin: 0;
`;

const CardContent = styled.div`
  width: 335px;
  height: 70px;
`;

const CardInfo = styled.div`
  width: 335px;
  height: 166px;
  padding: 0 18px;
`;

const Dday = styled.div`
  width: 41px;
  height: 18px;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  padding-bottom: 18px;
  font-size: 14px;
`;

const PublicPrivate = styled.div`
  width: 40px;
  height: 18px;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  padding-bottom: 18px;
  font-size: 14px;
  white-space: nowrap;
  color: #8d8d8d;
`;

const Bar = styled.div`
  width: 4px;
  height: 18px;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
`;

const Flexbox = styled.div`
  width: 91px;
  height: 18px;
  display: flex;
  gap: 10px;
`;

const UserFlexbox = styled.div`
  width: 199px;
  height: 38px;
  display: flex;
  gap: 40px;
  margin-top: 40px;
`;

const BadgeCount = styled.p`
  width: 46px;
  height: 38px;
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  color: #b8b8b8;
`;

const MemoryCount = styled.p`
  width: 22px;
  height: 38px;
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  color: #b8b8b8;
`;

const GroupLikes = styled.p`
  width: 51px;
  height: 38px;
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  color: #b8b8b8;
`;

const Flexbox2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const GroupList = ({ items }) => {
  const [isPublicActive, setIsPublicActive] = useState(true);
  const [isPrivateActive, setIsPrivateActive] = useState(false);

  const filteredItems = items.filter(item =>
    isPublicActive ? item.Public === "공개" : item.Public === "비공개",
  );

  return (
    <GridContainer>
      {filteredItems.map(card => (
        <Card key={card.id}>
          <Link
            to="/Groups"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CardImg src={card.imageUrl} alt={card.title} />
            <CardInfo>
              <Flexbox>
                <Dday>{card.Dday}</Dday>
                <Bar>|</Bar>
                <PublicPrivate>{card.Public}</PublicPrivate>
              </Flexbox>
              <CardContent>
                <CardTitle>{card.title}</CardTitle>
                <Cardtext>{card.text}</Cardtext>
              </CardContent>
              <UserFlexbox>
                <Flexbox2>
                  <BadgeCount>획득 배지</BadgeCount>
                  <p>2</p>
                </Flexbox2>
                <Flexbox2>
                  <MemoryCount>추억</MemoryCount>
                  <p>8</p>
                </Flexbox2>
                <Flexbox2>
                  <GroupLikes>그룹 공감</GroupLikes>
                  <p>
                    <img src={SmallFlower} alt="꽃" />
                    1.5k
                  </p>
                </Flexbox2>
              </UserFlexbox>
            </CardInfo>
          </Link>
        </Card>
      ))}
    </GridContainer>
  );
};

export default GroupList;
