import styled from "styled-components";
import { ProductType } from "../../types/type";

interface NewProductProps {
  totalData: number | undefined;
  querySort: string;
  onChangeName: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ProductListHeader = ({
  totalData,
  querySort,
  onChangeName,
}: NewProductProps) => {
  return (
    <ProductListHeaderComponent>
      <ProdcutListTotal>
        총 <strong className="dataCount">{totalData}</strong>개의 상품이
        있습니다.
      </ProdcutListTotal>
      <div>
        <ProductSortSelect value={querySort} onChange={onChangeName}>
          <option value="신상품">신상품</option>
          <option value="상품명">상품명</option>
          <option value="낮은가격">낮은가격</option>
          <option value="높은가격">높은가격</option>
        </ProductSortSelect>
      </div>
    </ProductListHeaderComponent>
  );
};

const ProductListHeaderComponent = styled.div`
  border-top: 0;
  padding: 0 0 20px;
  margin: 0;
  border-bottom: 1px solid #ebebeb;
  overflow: hidden;
  text-align: right;
  line-height: 38px;
`;

const ProdcutListTotal = styled.div`
  float: left;
  color: #7d7d7d;
  .dataCount {
    font-weight: bold;
    color: black;
  }
`;

const ProductSortSelect = styled.select`
  max-width: 100%;
  height: 40px;
  padding: 0 30px 0 15px;
  font-size: 13px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  background: #fff
    url(//img.echosting.cafe24.com/skin/skin/common/ico_select.png) no-repeat
    right 10px center;
  background-size: 14px 8px;
  -webkit-appearance: none;
  appearance: none;
`;

export default ProductListHeader;