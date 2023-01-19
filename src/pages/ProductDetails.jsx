import { Button } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
  }, [id]);

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
          width={50}
          className="left-arrow"
          onClick={() => navigateTo(-1)}
        />
        <ProductWrapper>
          <nav>Product</nav>
          <div className="product-details">
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.title} />
            </div>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <div className="rating">
              <p> {product.rating.count} ratings</p>
              <p> {product.rating.rate}/5</p>
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
  }
`;
