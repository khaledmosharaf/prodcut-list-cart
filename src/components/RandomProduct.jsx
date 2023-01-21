import { useDispatch, useSelector } from 'react-redux';
import { setRandomProduct } from 'reducers/productsReducer';
import styled from 'styled-components';
import { Button, Product } from 'components';

export default function RandomProduct({ data }) {
  const dispatch = useDispatch();
  const { products, randomProduct } = useSelector(
    (store) => store.productsReducer
  );
  function getRandomProduct() {
    if (products && products.length > 0) {
      const noOfProdcuts = products.length;
      const productIds = products.map((product) => product.id);
      const randomProductId =
        productIds[Math.floor(Math.random() * (noOfProdcuts - 1 - 0 + 1) + 0)];
      dispatch(setRandomProduct(randomProductId));
    }
  }
  return (
    <RandomProductWrapper>
      <Button onClick={() => getRandomProduct()} className="random-btn">
        Random Product?
      </Button>
      {randomProduct && randomProduct.length > 0 && (
        <div className="random-product-wrapper">
          <Product data={randomProduct[0]} />
        </div>
      )}
    </RandomProductWrapper>
  );
}
const RandomProductWrapper = styled.div`
  padding: 20px;
  border: 1px solid #888;
  height: 100%;
  margin-top: 20px;
  border-radius: 6px;
  font-size: 0.9rem;

  @media (max-width: 767px) {
    margin-right: 20px;
    margin-left: 20px;
  }
  .random-btn {
    margin: 20px 0 30px;
  }
  .random-product-wrapper {
    border: 1px solid #777;
    border-radius: 6px;
  }
`;
