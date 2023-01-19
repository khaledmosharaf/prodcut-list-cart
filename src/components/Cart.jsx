import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import DeleteIcon from 'assets/icons/Trash-can-icon.png';
import { clearCart, deleteFromCart } from 'reducers/cartReducer';
import { useEffect, useState } from 'react';
import Button from './Button';
import { setRandomProduct } from 'reducers/productsReducer';
import { CartItem, Product } from 'components';

export default function Cart() {
  const dispatch = useDispatch();

  const { cart, cartFull, cartEmpty, itemAlreadyInCart } = useSelector(
    (store) => store.cartReducer
  );

  const { products, randomProduct } = useSelector(
    (store) => store.productsReducer
  );

  const [cartStatus, setCartStatus] = useState({
    cartFullLocal: null,
    cartEmptyLocal: null,
    itemAlreadyInCartLocal: null,
  });

  function getRandomProduct() {
    if (products && products.length > 0) {
      const noOfProdcuts = products.length;
      const productIds = products.map((product) => product.id);
      const randomProductId =
        productIds[Math.floor(Math.random() * (noOfProdcuts - 1 - 0 + 1) + 0)];
      dispatch(setRandomProduct(randomProductId));
    }
  }

  useEffect(() => {
    setCartStatus((prev) => ({
      ...prev,
      cartFullLocal: cartFull,
      cartEmptyLocal: cartEmpty,
      itemAlreadyInCartLocal: itemAlreadyInCart,
    }));

    let myTimeout;

    myTimeout = setTimeout(() => {
      setCartStatus((prev) => ({
        ...prev,
        cartFullLocal: null,
        cartEmptyLocal: null,
        itemAlreadyInCartLocal: null,
      }));
    }, 3500);

    return () => clearTimeout(myTimeout);
  }, [cartFull, cartEmpty, itemAlreadyInCart]);

  return (
    <>
      <CartWrapper>
        <nav>
          <div className="section-title-container">
            <h3 className="section-title">Your Cart</h3>
            <span>{cartFull && '(Max 4 products)'}</span>
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
        <Button onClick={() => getRandomProduct()} className="random-btn">
          Random Product?
        </Button>
        {randomProduct && randomProduct.length > 0 && (
          <Product data={randomProduct[0]} />
        )}
      </CartWrapper>
    </>
  );
}
const CartWrapper = styled.div`
  margin-right: 20px;
  padding: 20px;
  border: 1px solid #888;
  height: 100%;
  margin-top: 80px;
  border-radius: 6px;
  font-size: 0.9rem;

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
  .random-btn {
    margin: 20px 0 30px;
  }
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #b00;
`;
