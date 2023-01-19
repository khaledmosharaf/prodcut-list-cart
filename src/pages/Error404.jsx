import { Button } from 'components';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Error404() {
  const navigateTo = useNavigate();

  return (
    <Error404Wrapper>
      <Button onClick={() => navigateTo(-1)}>Go Back</Button>
      <p>or</p>
      <Button onClick={() => navigateTo('/')}>Go Home</Button>
    </Error404Wrapper>
  );
}

const Error404Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  font-size: 2rem;
`;
