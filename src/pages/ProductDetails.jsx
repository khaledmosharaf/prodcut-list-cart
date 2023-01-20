import { Button } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart } from 'reducers/cartReducer';
import { setCurrentProduct } from 'reducers/productsReducer';
import styled from 'styled-components';
import LeftArrow from 'assets/icons/Arrows-Left-Circular-icon.png';

export default function Product() {
  const { id } = useParams();
  console.log('id', id);
  console.log('typeof id', typeof id);

  const dispatch = useDispatch();

  const navigateTo = useNavigate();

  useEffect(() => {
    if (id) {
      console.log('useEffect id', id);
      dispatch(setCurrentProduct(id));
    }
  }, [dispatch, id]);

  const { currentProduct } = useSelector((store) => store.productsReducer);

  console.log('currentProduct', currentProduct);

  let product;
  if (currentProduct) {
    product = currentProduct[0];
  }

  return (
    product && (
      <>
        <img
          src={LeftArrow}
          alt="go back"
          className="left-arrow"
          onClick={() => navigateTo(-1)}
        />
        <ProductWrapper>
          <nav>Product</nav>
          <div className="product-details">
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.title} />
            </div>
            <h2>{product.title}</h2>
            <h3>{product.description}</h3>
            <h4>${product.price}</h4>
            <div className="rating">
              <h5> {product.rating.count} ratings</h5>
              <h5> {product.rating.rate}/5 average </h5>
            </div>
            <Button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </Button>
          </div>
        </ProductWrapper>
      </>
    )
  );
}
const ProductWrapper = styled.div`
  width: 80%;
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  margin: 50px;
  position: relative;
  left: 10%;

  img {
    width: 40%;
    position: relative;
    left: 20%;
  }

  .product-details {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 1.1rem;
  }
`;
