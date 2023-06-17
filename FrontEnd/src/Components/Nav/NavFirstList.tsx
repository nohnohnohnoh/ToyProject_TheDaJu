import React from "react";
import { useSelector } from "react-redux";
import { RootState, persistor } from "../../store";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const NavFirstList = () => {
  const localStorageToken = localStorage.getItem("auth_token");
  const nickName = useSelector(
    ({ auth }: RootState) => auth.authData?.data.nickName
  );
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  const navigateCreate = () => {
    navigate("/create");
  };

  const logOut = async () => {
    localStorage.clear();
    await persistor.purge();
    window.location.reload();
  };

  return (
    <NavFirstListSection>
      {localStorageToken ? (
        <NavCreate>환영합니다 {nickName}님</NavCreate>
      ) : (
        <NavCreate onClick={navigateCreate}>회원가입</NavCreate>
      )}
      {localStorageToken ? (
        <NavLogin onClick={logOut}>로그아웃</NavLogin>
      ) : (
        <NavLogin onClick={navigateLogin}>로그인</NavLogin>
      )}
      <NavOrder>주문조회</NavOrder>
      <NavProduct>최근본상품</NavProduct>
      <NavClient>고객센터</NavClient>
    </NavFirstListSection>
  );
};

const NavFirstListSection = styled.div`
  width: 100%;
  height: 35px;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transform: translateY(0);
  position: relative;
  z-index: 11;
`;

const NavCreate = styled.div`
  padding: 0 0.5% 0 0.5%;
  color: #6a6a6a;
  font-size: 12px;
  border-right: 0.5px solid #6a6a6a;
  cursor: pointer;
  &:hover {
    color: #1a1a1a;
  }
`;

const NavLogin = styled(NavCreate)``;

const NavOrder = styled(NavCreate)``;

const NavProduct = styled(NavCreate)``;

const NavClient = styled(NavCreate)`
  border: none;
`;

export default NavFirstList;
