import { Searchbar, Product } from 'components';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

export default function ProductList({ products }) {
  console.log('products', products);

  const dispatch = useDispatch();

  return (
    <ProductListWrapper>
      <Searchbar />
      <ul className="product-list">
        {products &&
          products.map((product) => (
            <li key={product.id} className="product">
              <Product data={product} />
              {/* <div className="product-image-wrapper">
                <img src={product.image} alt={product.title} />
              </div>
              <h4>{product.title}</h4>
              <p>${product.price}</p>
              <div className="rating">
                <p> {product.rating.count} ratings</p>
                <p> {product.rating.rate}/5</p>
              </div>
              <div className="btn-group">
                <Button onClick={() => dispatch(addToCart(product))}>
                  Add to Cart
                </Button>
                <Link to={`/products/${product.id}`}>
                  <Button>Details</Button>
                </Link>
              </div> */}
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

  .product {
  }
`;
