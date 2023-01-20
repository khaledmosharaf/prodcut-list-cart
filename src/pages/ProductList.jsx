import { Searchbar, Product } from 'components';
import styled from 'styled-components';

export default function ProductList({ products }) {
  console.log('products', products);

  return (
    <ProductListWrapper>
      <Searchbar />
      <ul className="product-list">
        {products &&
          products.map((product) => (
            <li key={product.id} className="product">
              <Product data={product} />
            </li>
          ))}
      </ul>
    </ProductListWrapper>
  );
}

const ProductListWrapper = styled.div`
  padding: 20px;

  .product-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
  }
`;
