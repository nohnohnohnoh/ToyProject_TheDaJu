import { useState } from "react";
import {
  deleteWishListProduct,
  patchSelectProduct,
  getWishListProduct,
} from "../api/WishList";
import WishListModal from "./WishListModal/WishListModal";
import { useNavigate } from "react-router-dom";
import { WishListProductType } from "../types/type";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

interface WishListProps {
  wishListData: WishListProductType[];
  setWishListData: (data: WishListProductType[]) => void;
}

const WishListSection = ({ wishListData, setWishListData }: WishListProps) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [modalData, setModalData] = useState();

  const navigate = useNavigate();

  const onClickOneDelete = (_id: string) => {
    if (window.confirm("정말 삭제하시겠습니까 ?") === true) {
      deleteWishListProduct(_id, "");
      alert("삭제가 완료되었습니다.");
      navigate("/wishlist?page=1&limit=4");
    } else return;
  };

  const handleSingleCheck = (checked: any, _id: string) => {
    if (checked) {
      patchSelectProduct(_id, true).then((data) => {
        setWishListData(data.wishList);
      });
    } else {
      patchSelectProduct(_id, false).then((data) => {
        setWishListData(data.wishList);
      });
    }
  };

  const onToggleModal = (_id: string) => {
    setToggleModal(true);
    getWishListProduct(`?wishListId=${_id}`).then(({ wishList }) =>
      setModalData(wishList)
    );
  };

  return (
    <WishList>
      <WishListHeader>
        <h3 className="title">나의 위시리스트</h3>
      </WishListHeader>
      <WishListSectionComponent>
        {wishListData.map(({ _id, src, name, price, product_id }, index) => {
          const priceComma = price?.toLocaleString();
          return (
            <WishListBox key={_id}>
              <Check>
                <CheckIcon
                  type="checkbox"
                  onChange={(e) => handleSingleCheck(e.target.checked, _id)}
                  checked={wishListData[index].select === true ? true : false}
                />
              </Check>
              <WishListImgBox
                onClick={() => navigate(`/product/${product_id}`)}
              >
                <WishListImg src={src} />
              </WishListImgBox>
              <WishListContentBox>
                <span className="text">{name}</span>
                <span className="text">{priceComma}원</span>
              </WishListContentBox>
              <WishListButtonBox>
                <Delete onClick={() => onClickOneDelete(_id)} />
                <ButtonBox>
                  <CartButton onClick={() => onToggleModal(_id)}>
                    장바구니
                  </CartButton>
                  <OrderButton onClick={() => onToggleModal(_id)}>
                    주문하기
                  </OrderButton>
                </ButtonBox>
              </WishListButtonBox>
            </WishListBox>
          );
        })}
        <WishListModal
          toggleModal={toggleModal}
          setToggleModal={setToggleModal}
          modalData={modalData}
          setWishListData={setWishListData}
        />
      </WishListSectionComponent>
    </WishList>
  );
};

const WishList = styled.div`
  max-width: 1080px;
  width: 92%;
  margin: 4% auto 0;
  ${({ theme }) => theme.media.desktop`
    margin: 0 auto ;
  `}
`;

const WishListHeader = styled.div`
  margin-bottom: 15px;
  .title {
    font-weight: 700;
    font-size: 18px;
    color: #1a1a1a;
    text-align: left;
  }
  ${({ theme }) => theme.media.desktop`
    margin: 20px 0;
    .title {
    font-weight: 700;
    font-size: 18px;
    color: #1a1a1a;
    text-align: center;
  }
  `}
`;

const WishListSectionComponent = styled.section`
  border-top: 2px solid #1a1a1a;
`;

const WishListBox = styled.div`
  display: flex;
  position: relative;
  border-bottom: 1px solid #ddd;
  padding: 25px 0;
`;

const Check = styled.span`
  display: inline-block;
  margin: 0 10px 0 0;
`;

const CheckIcon = styled.input`
  width: 24px;
  height: 24px;
  border: 1px solid #d9d9d9;
  background: url("https://thedaju.cafe24.com/SkinImg/img/checkbox_off.svg")
    no-repeat center;
  transition: none;
  appearance: none;
  cursor: pointer;
  &:checked {
    background: url("https://thedaju.cafe24.com/SkinImg/img/checkbox_on.svg")
      no-repeat center;
  }
`;

const WishListImgBox = styled.div`
  width: 30%;
  height: 200px;
  padding: 0 0 0 24px;
  @media screen and (max-width: 850px) {
    width: 35%;
  }
  ${({ theme }) => theme.media.tablet`
  width: 30%;
  height: 150px;
  padding: 0;
  `}
  @media screen and (max-width: 600px) {
    width: 40%;
  }
  @media screen and (max-width: 475px) {
    height: 125px;
  }
  ${({ theme }) => theme.media.mobile`
  height: 100px;
  `}
`;

const WishListImg = styled.img`
  width: 100%;
  height: 100%;
`;

const WishListContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: 3%;
  .text {
    font-weight: 600;
    margin-bottom: 4%;
  }
  ${({ theme }) => theme.media.tablet`
  font-size:15px;
  `}
  @media screen and (max-width: 475px) {
    font-size: 13px;
  }
  ${({ theme }) => theme.media.mobile`
  font-size:11px;
  `}
`;

const Delete = styled(AiOutlineClose)`
  position: absolute;
  right: -4%;
  width: 12%;
  height: 12%;
  color: #b5b5b5;
  @media screen and (max-width: 400px) {
    position: absolute;
    right: -3%;
  }
  ${({ theme }) => theme.media.mobile`
    position: absolute;
    right: -2%; 
  `}
`;

const WishListButtonBox = styled.div`
  width: 40%;
  ${({ theme }) => theme.media.desktop`
  width: 0%;
  `}
`;

const ButtonBox = styled.div`
  position: absolute;
  bottom: 22px;
  right: 0;
  @media screen and (max-width: 475px) {
    display: flex;
    flex-direction: column;
  }
`;

const CartButton = styled.button`
  margin: 5px;
  padding: 10px 20px;
  border: 1px solid #d6d6d6;
  outline: none;
  background: #fff;
  color: #000;
  @media screen and (max-width: 475px) {
    padding: 10px 28px;
  }
  ${({ theme }) => theme.media.mobile`
    padding: 5px 21px;
  `}
`;

const OrderButton = styled(CartButton)`
  border: 1px solid #1a1a1a;
  background: #1a1a1a;
  color: #fff;
  font-weight: bold;
  right: 0%;
`;
export default WishListSection;
