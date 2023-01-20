import { Cart, RandomProduct } from 'components';
import { SharedLayout } from 'layouts';
import { Error404, ProductDetails, ProductList } from 'pages';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { setProducts } from 'reducers/productsReducer';
import styled from 'styled-components';

export default function App() {
  const dispatch = useDispatch();
  const [productsToDisplay, setProductsToDisplay] = useState(null);
  console.log('productsToDisplay', productsToDisplay);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((data) => dispatch(setProducts(data)));
  }, [dispatch]);

  let { products, searchResults } = useSelector(
    (store) => store.productsReducer
  );

  useEffect(() => {
    if (products) {
      setProductsToDisplay(products);
    }
  }, [products]);

  useEffect(() => {
    if (searchResults !== null && searchResults.length > 0) {
      console.log('searchResults useEFfect ran');

      setProductsToDisplay(searchResults);
    }
  }, [searchResults]);

  return productsToDisplay ? (
    <AppWrapper>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <SharedLayout
                sidebar={
                  <>
                    <Cart />
                    <RandomProduct />
                  </>
                }
              />
            }
          >
            <Route
              path="/"
              element={<ProductList products={productsToDisplay} />}
            />
            <Route path="products/:id" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  ) : (
    <Loading>Loading..</Loading>
  );
}

const AppWrapper = styled.div``;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  font-size: 2rem;
`;
