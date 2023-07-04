import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../../types/type";

interface NewproductProps {
  newData: ProductType[];
}

const ProductList = ({ newData }: NewproductProps) => {
  const navigate = useNavigate();

  return (
    <ProductListComponent>
      {newData?.map(({ _id, src, name, price }: ProductType) => {
        const priceComma = price?.toLocaleString();
        return (
          <ProductListBox
            onClick={() => {
              navigate(`/product/${_id}`);
            }}
            key={_id}
          >
            <ProductListImgBox>
              <ProductListImg src={src} />
            </ProductListImgBox>
            <ProductListTextBox>
              <ProductListName>{name}</ProductListName>
              <ProductListPrice>{priceComma}원</ProductListPrice>
            </ProductListTextBox>
          </ProductListBox>
        );
      })}
    </ProductListComponent>
  );
};

const ProductListComponent = styled.div`
  margin: 22px 0 0;
  text-align: left;
`;

const ProductListBox = styled.div`
  display: inline-block;
  width: 23%;
  margin: 0 10px 60px 10px;
`;

const ProductListImgBox = styled.div`
  width: 100%;
  height: 280px;
  margin: 0 0 10px;
  text-align: center;
`;

const ProductListImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  box-sizing: border-box;
`;

const ProductListTextBox = styled.div`
  margin: 20px 20px 0 0;
  padding: 0;
  font-size: 12px;
  line-height: 18px;
  text-align: left;
  white-space: normal;
`;

const ProductListName = styled.div`
  font-size: 13px;
  color: #555555;
`;

const ProductListPrice = styled.div`
  margin: 10px 0 5px 0;
  font-size: 12px;
  color: #003852;
  font-weight: bold;
`;

export default ProductList;