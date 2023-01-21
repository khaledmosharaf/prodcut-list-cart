import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import DeleteIcon from 'assets/icons/Trash-can-icon.png';
import { clearCart } from 'reducers/cartReducer';
import { useEffect, useState } from 'react';
import { CartItem } from 'components';

const initialCartStatus = {
  cartFullLocal: null,
  cartEmptyLocal: null,
  itemAlreadyInCartLocal: null,
};

export default function Cart() {
  const dispatch = useDispatch();

  const { cart, cartFull, cartEmpty, itemAlreadyInCart } = useSelector(
    (store) => store.cartReducer
  );

  const [cartStatus, setCartStatus] = useState(initialCartStatus);

  useEffect(() => {
    setCartStatus((prev) => ({
      ...prev,
      cartFullLocal: cartFull,
      cartEmptyLocal: cartEmpty,
      itemAlreadyInCartLocal: itemAlreadyInCart,
    }));

    let myTimeout;

    myTimeout = setTimeout(() => {
      setCartStatus(initialCartStatus);
    }, 3500);

    return () => clearTimeout(myTimeout);
  }, [cartFull, cartEmpty, itemAlreadyInCart]);

  return (
    <CartWrapper>
      <nav>
        <div className="section-title-container">
          <h3 className="section-title">Your Cart</h3>
          <span style={{ color: '#900' }}>
            {(cartFull && '(Full - Max 4 products)') ||
              (cartEmpty && '(Empty)')}
          </span>
        </div>

        <div
          className="clear-all-btn-content"
          onClick={() => dispatch(clearCart())}
        >
          <span>Clear Cart</span>
          <div className="img-wrapper delete-icon">
            <img src={DeleteIcon} alt="delete" />
          </div>
        </div>
      </nav>
      <ul>
        {cart.map((cartItem) => (
          <li key={cartItem.id}>
            <CartItem data={cartItem} />
          </li>
        ))}
        {cartStatus.cartFullLocal && (
          <Message>Sorry cart is full, Max 4 products</Message>
        )}
        {cartStatus.cartEmptyLocal && <Message>is Empty!</Message>}
        {cartStatus.itemAlreadyInCartLocal && (
          <Message>Product Already in Cart</Message>
        )}
      </ul>
    </CartWrapper>
  );
}
const CartWrapper = styled.div`
  padding: 20px;
  border: 1px solid #888;
  height: fit-content;
  margin-top: 80px;
  border-radius: 6px;
  font-size: 0.9rem;

  @media (max-width: 767px) {
    margin-right: 20px;
    margin-left: 20px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    height: 70px;

    .clear-all-btn-content {
      align-self: flex-start;
      cursor: pointer;
      display: flex;
      align-items: center;
      color: #a00;
      :hover {
        text-decoration: underline;
      }

      span {
        align-self: center;
      }
    }
  }

  .section-title {
    font-size: 1.2rem;
    color: #111;

    span {
      font-size: 0.9rem;
    }
  }
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #b00;
`;
