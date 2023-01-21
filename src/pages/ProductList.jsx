import { Searchbar, Product, Button, Cart, RandomProduct } from 'components';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export default function ProductList({ products }) {
  console.log('products', products);
  const [showCart, setShowCart] = useState(false);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const handleWindowResize = () => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize[0] > 767) setShowCart(false);
  }, [windowSize]);

  function cartBtnClickHandler() {
    setShowCart((prev) => !prev);
  }

  return !showCart ? (
    <ProductListWrapper>
      <div className="search-and-cart">
        <Searchbar />
        <Button className="cart-btn" onClick={() => cartBtnClickHandler()}>
          Cart
        </Button>
      </div>

      <ul className="product-list">
        {products &&
          products.map((product) => (
            <li key={product.id} className="product">
              <Product data={product} />
            </li>
          ))}
      </ul>
    </ProductListWrapper>
  ) : (
    <>
      <Button
        className="cart-btn"
        onClick={() => cartBtnClickHandler()}
        style={{ marginLeft: '20px', marginTop: '20px' }}
      >
        Products
      </Button>
      <Cart />
      <RandomProduct />
    </>
  );
}

const ProductListWrapper = styled.div`
  padding: 20px;

  .search-and-cart {
    display: flex;
    gap: 100px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    .cart-btn {
      display: none;
      @media (max-width: 767px) {
        display: block;
      }
    }
  }

  .product-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
  }
`;
