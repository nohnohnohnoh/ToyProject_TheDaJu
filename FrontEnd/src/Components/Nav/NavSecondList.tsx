import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import {
  setProductType,
  setToggleSearch,
  setToggleAside,
} from "../../reducers/productSlice";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch, BsBasket, BsPerson, BsHeart } from "react-icons/bs";
import styled from "styled-components";

const NavSecondList = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const localStorageToken = localStorage.getItem("AUTH_TOKEN");

  const navigateMain = () => {
    navigate("/");
  };

  const navigateRecommendProduct = () => {
    navigate("/product?page=1&limit=8");
    dispatch(setProductType({ productType: "추천상품" }));
  };

  const navigateNewProdcut = () => {
    navigate("/product?page=1&limit=16");
    dispatch(setProductType({ productType: "신제품" }));
  };

  const navigateSearch = () => {
    dispatch(setToggleSearch({ toggleSearch: true }));
  };

  const navigateMyPage = () => {
    if (localStorageToken) {
      navigate("/mypage");
    } else {
      alert("로그인 후 이용 가능합니다.");
    }
  };

  const navigateCart = () => {
    if (localStorageToken) {
      navigate("/cart");
    } else {
      alert("로그인 후 이용 가능합니다.");
    }
  };

  const navigateWishList = () => {
    if (localStorageToken) {
      navigate("/wishlist?page=1&limit=4");
    } else {
      alert("로그인 후 이용 가능합니다.");
    }
  };

  const navigatePreparing = () => {
    alert("준비 중에 있는 서비스 입니다.");
  };

  const onToggleAisde = () => {
    dispatch(setToggleAside({ toggleAside: true }));
  };

  return (
    <NavSecondListSection>
      <MediaMenuIcon onClick={onToggleAisde} />
      <NavHeaderLogo onClick={navigateMain}>THE DAJU</NavHeaderLogo>
      <MediaSearchIcon onClick={navigateSearch} />
      <NavMenu>
        <NavMenuUl>
          <NavMenuLi onClick={navigateRecommendProduct}>추천 상품</NavMenuLi>
          <NavMenuLi onClick={navigateNewProdcut}>신제품</NavMenuLi>
          <NavMenuLi onClick={navigatePreparing}>잔/컵</NavMenuLi>
          <NavMenuLi onClick={navigatePreparing}>접시/볼</NavMenuLi>
          <NavMenuLi onClick={navigatePreparing}>수저/커트러리</NavMenuLi>
          <NavMenuLi onClick={navigatePreparing}>
            조리도구/기타주방잡화
          </NavMenuLi>
          <NavMenuLi onClick={navigatePreparing}>재질</NavMenuLi>
          <NavMenuLi onClick={navigatePreparing}>브랜드</NavMenuLi>
        </NavMenuUl>
      </NavMenu>
      <NavMyPage>
        <SearchIcon onClick={navigateSearch} />
        <MyPageIcon onClick={navigateMyPage} />
        <ProductIcon onClick={navigateCart} />
        <WishLIstIcon onClick={navigateWishList} />
      </NavMyPage>
    </NavSecondListSection>
  );
};

const NavSecondListSection = styled.div`
  ${({ theme }) => theme.flexMixIn("center", "center")}
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  margin-top: 10px;
  ${({ theme }) => theme.media.desktop`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0;
  `}
`;

const NavHeaderLogo = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  ${({ theme }) => theme.media.desktop`
    font-size: 32px;
    padding: 16px 0;
  `}
  ${({ theme }) => theme.media.mobile`
    font-size: 26px;
    padding: 16px 0;
  `}
`;

const MediaMenuIcon = styled(AiOutlineMenu)`
  font-size: 32px;
  ${({ theme }) => theme.media.desktopHuge`
  display: none;
  `}
  ${({ theme }) => theme.media.desktop`
    font-size: 24px;
  `}
`;

const MediaSearchIcon = styled(BsSearch)`
  font-size: 30px;
  ${({ theme }) => theme.media.desktopHuge`
  display: none;
  `}
  ${({ theme }) => theme.media.desktop`
    font-size: 22px;
  `}
`;

const NavMenu = styled.div`
  position: relative;
  width: 100%;
  margin: 1.5%;
  ${({ theme }) => theme.media.desktop`
  display: none;
  `}
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
  ${({ theme }) => theme.flexMixIn("center", "center")}
  ${({ theme }) => theme.positionMixIn("absolute", 60, -0.25)};
  width: 10%;
  ${({ theme }) => theme.media.desktop`
  display: none;
  `}
`;
const SearchIcon = styled(BsSearch)`
  margin: 0 5%;
  font-size: 20px;
  cursor: pointer;
`;
const MyPageIcon = styled(BsPerson)`
  margin: 0 5%;
  font-size: 25px;
  cursor: pointer;
`;
const ProductIcon = styled(BsBasket)`
  margin: 0 5%;
  font-size: 20px;
  cursor: pointer;
`;

const WishLIstIcon = styled(BsHeart)`
  margin: 0 5%;
  font-size: 20px;
  cursor: pointer;
`;

export default NavSecondList;
