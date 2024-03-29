import ProductLayOut from "../ProductLayOut";
import SearchProductSection from "./SearchProductSection";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { setProductSearch } from "../../reducers/productSlice";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

interface TitleProps {
  title: string;
}

const SearchProduct = ({ title }: TitleProps) => {
  const productSearch = useSelector(
    ({ product }: RootState) => product.productSearch
  );

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value }: any = e.target;
    dispatch(setProductSearch({ productSearch: value }));
  };

  const onSubmitSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/product?search=${productSearch}&page=1&limit=4`);
    window.location.reload();
  };

  return (
    <ProductLayOut title={title}>
      <SearchProductForm onSubmit={onSubmitSearch}>
        <SearchProductFieldSet>
          <SearchProductInputBox>
            <SearchProductInput
              onChange={onChangeSearch}
              value={productSearch}
            />
            <SearchIcon />
          </SearchProductInputBox>
        </SearchProductFieldSet>
      </SearchProductForm>
      <SearchDivBox>
        <SearchDiv />
      </SearchDivBox>
      <SearchProductSection />
    </ProductLayOut>
  );
};

const SearchProductForm = styled.form`
  margin: -40px 0 59px;
  padding: 22px 0;
  ${({ theme }) => theme.media.desktop`
    margin: 0 !important;
    padding: 0 0 24px !important;
  `}
`;

const SearchProductFieldSet = styled.fieldset`
  position: relative;
  display: table;
  margin: 0 auto 10px;
  text-align: center;
`;

const SearchProductInputBox = styled.div`
  position: relative;
  display: inline-block;
  width: 650px;
  padding: 0 36px 0 0;
  border-bottom: 1px solid #000;
  ${({ theme }) => theme.media.desktop`
  width: 92%;
  `}
`;

const SearchProductInput = styled.input`
  width: 100%;
  height: 54px;
  font-size: 18px;
  background: #fff;
  border: 0;
  outline: 0;
`;

const SearchIcon = styled(BsSearch)`
  position: absolute;
  bottom: 12px;
  right: 0;
  font-size: 26px;
  cursor: pointer;
  ${({ theme }) => theme.media.desktop`
  font-size: 22px;
  `}
`;

const SearchDivBox = styled.div`
  ${({ theme }) => theme.flexMixIn("center", "center")};
`;

const SearchDiv = styled.div`
  max-width: 1230px;
  width: 92%;
  border-bottom: 0.5px solid #eee;
`;

export default SearchProduct;
