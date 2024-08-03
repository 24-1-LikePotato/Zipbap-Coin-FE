import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import WhiteWrapContainer from "../container/WhiteWrapContainer";
import ImageContainer from "../container/ImageContainer";
import HorizontalScrollContainer from "../container/HorizontalScrollContainer";
import axios from "axios";
import "../fonts/OpenSans.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
const ContentWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  overflow-y: hidden; /* 세로 스크롤 방지 */
  overflow-x: auto;
  position: relative; /* 컨테이너 위치 고정 */
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContentBox = styled.div`
  width: 240px;
  height: 338px;
  border-radius: 20px;
  background-color: #fff9f2;
  cursor: pointer;
  flex-shrink: 0; /* 요소가 줄어들지 않도록 설정 */
`;
const WrapImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
`;

/*const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;*/

const Text = styled.p`
  margin-left: 23px;
  margin-right: 23px;
  font-family: "OpenSans";
  font-weight: 400;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal; /* white-space 속성을 normal로 설정 */
  height: calc(1em * 3); /* 높이 설정 */
`;

export default function TodayFood() {
  const navigate = useNavigate();

  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://zipbab-coin.p-e.kr/main/today-recipe")
      .then((res) => {
        setFoodItems(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleBoxClick = (name) => {
    navigate(`/home/recipe/${name}/${name}`);
  };
  return (
    <Wrapper>
      <WhiteWrapContainer height="446px">
        <Title>오늘의 집밥</Title>
        <HorizontalScrollContainer height="357px">
          <ContentWrapper>
            {foodItems.map((item) => (
              <ContentBox
                key={item.name}
                onClick={() => handleBoxClick(item.name)}
              >
                <WrapImageContainer>
                  <ImageContainer
                    width="200px"
                    height="200px"
                    imgSrc={item.image}
                  ></ImageContainer>
                </WrapImageContainer>

                <Text>{item.name}</Text>
              </ContentBox>
            ))}
          </ContentWrapper>
        </HorizontalScrollContainer>
      </WhiteWrapContainer>
    </Wrapper>
  );
}
