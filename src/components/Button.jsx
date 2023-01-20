import styled from 'styled-components';
const Button = styled.button`
  background-color: #fff;
  padding: 8px;
  border-radius: 6px;
  color: #333;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  border: 1px solid #777;
  width: ${(p) => (p.w100 ? '100%' : 'fit-content')};

  &:hover {
    color: #fff;
    background-color: #070;
    border-color: #070;

    &a {
      color: #777;
    }
  }
`;
export default Button;
