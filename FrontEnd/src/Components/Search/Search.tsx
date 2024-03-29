import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import {
  setProductSearch,
  setProductType,
  setToggleSearch,
} from "../../reducers/productSlice";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import styled, { css } from "styled-components";

const Search = () => {
  const [search, setSearch] = useState("");

  const toggleSearch = useSelector(
    ({ product }: RootState) => product.toggleSearch
  );

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  const onClickClose = () => {
    dispatch(setToggleSearch({ toggleSearch: false }));
  };

  const onClickSearch = async () => {
    await Promise.all([
      await dispatch(setProductType({ productType: "상품검색" })),
      await dispatch(setProductSearch({ productSearch: search })),
      await dispatch(setToggleSearch({ toggleSearch: false })),
    ]);
    navigate(`/product?search=${search}&page=1&limit=4`);
    setSearch("");
    window.location.reload();
  };

  const onSubmitSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClickSearch();
  };

  return (
    <>
      <form onSubmit={onSubmitSearch}>
        <SearchComponent visible={toggleSearch}>
          <SearchTitle>SEARCH</SearchTitle>
          <SearchFieldSet>
            <SearchInput value={search} onChange={onChangeSearch} type="text" />
            <SerchIcon onClick={onClickSearch} />
          </SearchFieldSet>
          <CloseIcon onClick={onClickClose} />
        </SearchComponent>
      </form>
      <BackGround visible={toggleSearch} />
    </>
  );
};

const SearchComponent = styled.div<{ visible: boolean }>`
  z-index: 1001;
  ${({ theme }) => theme.positionMixIn("fixed", 0, 0)};
  left: 0;
  height: 389px;
  opacity: 0;
  visibility: hidden;
  transform: translate3d(0, -100%, 0);
  transition: opacity 0.5s ease, transform 0.5s ease, visibility 0s linear 0.5s;
  background: #fff;
  ${(props) =>
    props.visible &&
    css`
      opacity: 1;
      visibility: visible;
      transition: opacity 0.5s ease, transform 0.5s ease,
        visibility 0s linear 0s;
      transform: translateZ(0);
    `}
  ${({ theme }) => theme.media.desktop`
  height: 260px;
  `}
`;

const SearchTitle = styled.div`
  display: block;
  margin: 103px 0 54px;
  color: #3a3a3a;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  ${({ theme }) => theme.media.desktop`
  margin: 50px 0 29px;
    display: block;
    font-size: 30px;
    text-align: center;
  `}
`;

const SearchFieldSet = styled.fieldset`
  display: flex;
  width: 650px;
  margin: 0 auto;
  border-bottom: 1px solid #000;
  ${({ theme }) => theme.media.desktop`
    width: 90%;
  `}
`;

const SearchInput = styled.input`
  flex: 1;
  width: 100%;
  height: 54px;
  padding: 15px 0;
  box-sizing: border-box;
  border: 0;
  background: #fff;
  font-size: 18px;
  ${({ theme }) => theme.media.desktop`
    width: 100%;
    height: 58px;
    padding: 19px 0;
    flex: 1;
    font-size: 16px;
    box-sizing: border-box;
    border: 0;
    background: #fff;
  `}
`;

const BackGround = styled.div<{ visible: boolean }>`
  z-index: 1000;
  ${({ theme }) => theme.positionMixIn("fixed", 0, 0)};
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  ${(props) =>
    props.visible &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

const SerchIcon = styled(BsSearch)`
  width: 28px;
  height: 28px;
  margin: 16px 0 0;
  cursor: pointer;
  ${({ theme }) => theme.media.desktop`
    width: 25px;
    height: 25px;
    margin: 17px 0 0;
`}
`;

const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  top: 35px;
  right: 50px;
  font-size: 35px;
  cursor: pointer;
  ${({ theme }) => theme.media.desktop`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  `}
`;

export default Search;
