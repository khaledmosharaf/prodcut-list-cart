import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from 'reducers/cartReducer';
import styled from 'styled-components';
import { Button } from 'components';

export default function Product({ data }) {
  const dispatch = useDispatch();
  return (
    <ProductWrapper>
      <div className="img-wrapper product-image">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="product-text">
        <h3>{data.title}</h3>
        <h4>${data.price}</h4>
        <div className="rating">
          <h5> {data.rating.count} ratings</h5>
          <h5 className="average-ratng"> average: {data.rating.rate}/5</h5>
        </div>
        <div className="btn-group">
          <Button onClick={() => dispatch(addToCart(data))}>Add to Cart</Button>
          <Link to={`/products/${data.id}`}>
            <Button>Details</Button>
          </Link>
        </div>
      </div>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* max-width: 300px; */
  /* width: 100%; */
  min-height: 200px;
  max-height: 400px;

  .product-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
      width: 140px;
    }
  }

  .product-text {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .rating {
    display: flex;
    justify-content: center;
    gap: 15px;
    align-self: flex-start;
    color: #777;
  }

  .btn-group {
    width: inherit;
    display: flex;
    justify-content: space-between;
  }
`;
