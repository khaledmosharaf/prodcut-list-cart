import styled from 'styled-components';
import DeleteIcon from 'assets/icons/Trash-can-icon.png';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from 'reducers/cartReducer';

export default function CartItem({ data }) {
  const dispatch = useDispatch();
  return (
    <CartItemWrapper>
      <div className="img-wrapper product-image">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="product-text">
        <h4>{data.title}</h4>
        <p>${data.price}</p>
      </div>
      <div
        className="img-wrapper delete-icon"
        onClick={() => dispatch(deleteFromCart(data.id))}
      >
        <img src={DeleteIcon} alt="delete" className="delete" />
      </div>
    </CartItemWrapper>
  );
}
const CartItemWrapper = styled.div`
  display: flex;
  border: 1px solid #999;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 10px;
  gap: 10px;
  background-color: #fff;

  .product-image {
    width: 150px;
    /* height: 70px; */
  }
  .product-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .delete {
    width: 30px;
    height: 30px;
  }
`;
