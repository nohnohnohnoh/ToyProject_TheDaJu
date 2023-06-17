import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsSearch, BsBasket, BsPerson } from "react-icons/bs";

const NavSecondList = () => {
  const navigate = useNavigate();

  const navigateMain = () => {
    navigate("/");
  };
  return (
    <NavSecondListSection>
      <NavHeaderLogo onClick={navigateMain}>THE DAJU</NavHeaderLogo>
      <NavMenu>
        <NavMenuUl>
          <NavMenuLi>추천 상품</NavMenuLi>
          <NavMenuLi>신제품</NavMenuLi>
          <NavMenuLi>잔/컵</NavMenuLi>
          <NavMenuLi>접시/볼</NavMenuLi>
          <NavMenuLi>수저/커트러리</NavMenuLi>
          <NavMenuLi>조리도구/기타주방잡화</NavMenuLi>
          <NavMenuLi>재질</NavMenuLi>
          <NavMenuLi>브랜드</NavMenuLi>
        </NavMenuUl>
      </NavMenu>
      <NavMyPage>
        <SearchIcon />
        <MyPageIcon />
        <ProductIcon />
      </NavMyPage>
    </NavSecondListSection>
  );
};

const NavSecondListSection = styled.div`
  width: 100%;
  ${({ theme }) => theme.flexMixIn("center", "center")}
  flex-wrap: wrap;
  position: relative;
  margin-top: 10px;
`;

const NavHeaderLogo = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`;

const NavMenu = styled.div`
  width: 100%;
  margin: 1.5%;
  position: relative;
`;

const NavMenuUl = styled.ul`
  ${({ theme }) => theme.flexMixIn("center", "center")}
  flex-wrap: wrap;
  margin: 0 2%;
`;

const NavMenuLi = styled.li`
  ${({ theme }) => theme.flexMixIn("", "center")};
  padding: 0 2%;
  font-size: 14px;
  font-weight: 600;
  color: #3a3a3a;
  cursor: pointer;
`;

const NavMyPage = styled.div`
  width: 10%;
  ${({ theme }) => theme.flexMixIn("center", "center")}
  ${({ theme }) => theme.postionMixIn("absolute", 60, -0.25)};
`;
const SearchIcon = styled(BsSearch)`
  font-size: 25px;
  margin: 0 7.5%;
  cursor: pointer;
`;
const MyPageIcon = styled(BsPerson)`
  font-size: 25px;
  margin: 0 7.5%;
  cursor: pointer;
`;
const ProductIcon = styled(BsBasket)`
  font-size: 25px;
  margin: 0 7.5%;
  cursor: pointer;
`;

export default NavSecondList;