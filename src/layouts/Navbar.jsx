import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Navbar() {
  const navigateTo = useNavigate();

  return (
    <NavbarWrapper>
      <header>
        <h2 onClick={() => navigateTo('/')}>Product List</h2>
        <ul className="links">
          <li>Home</li>
          <li>Logout</li>
        </ul>
      </header>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.nav`
  background-color: #777;
  height: 60px;
  line-height: 60px;
  padding-left: calc(160px);
  padding-right: calc(160px);
  width: 100%;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  color: #eee;

  h2 {
    cursor: pointer;
  }

  header {
    display: flex;

    width: calc(100% - 320px);
  }

  .links {
    display: flex;
    margin-left: auto;

    li {
      margin-left: 20px;
      cursor: pointer;
    }
  }
`;
