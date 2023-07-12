import styled from "styled-components";
import { postMyOrderProduct } from "../../api/ProductOrder";
import { postWishListProduct } from "../../api/WishList";
import { useNavigate } from "react-router-dom";

interface DeatilAreayProps {
  _id: string | undefined;
  src: string | undefined;
  name: string | undefined;
  price: number | undefined;
  total: number | undefined;
}

const DetailAreaButton = ({
  _id,
  src,
  name,
  price,
  total,
}: DeatilAreayProps) => {
  const navigate = useNavigate();

  const onClickBuy = () => {
    if (window.confirm("구매하시겠습니까 ?") === true) {
      postMyOrderProduct({
        src,
        name,
        price,
        quantity: total,
      }).then((data) => {
        alert(data.message);
      });
    } else return;
  };

  const onClickWishList = () => {
    if (window.confirm("관심 상품에 등록하시겠습니끼 ?") === true) {
      postWishListProduct({
        _id,
        src,
        name,
        price,
      }).then((data) => alert(data.message));
    } else return;
  };

  return (
    <ButtonBox>
      <BuyButton onClick={onClickBuy}>BUY IT NOW</BuyButton>
      <CartButton>CART</CartButton>
      <WishButton onClick={onClickWishList}>WISH LIST</WishButton>
    </ButtonBox>
  );
};

const ButtonBox = styled.div`
  display: flex;
`;

const BuyButton = styled.button`
  flex-basis: 230px;
  height: 70px;
  padding: 25px 0;
  font-size: 16px;
  font-weight: 400;
  background: #1a1a1a;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const CartButton = styled(BuyButton)`
  flex: 1;
  margin-left: 20px;
  background: #fff;
  color: #1a1a1a;
  border: 1px solid #d6d6d6;
`;

const WishButton = styled(CartButton)``;

export default DetailAreaButton;
