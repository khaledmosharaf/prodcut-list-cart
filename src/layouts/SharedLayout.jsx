import styled from 'styled-components';
import { Navbar, Sidebar } from 'layouts';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

export default function SharedLayout(props) {
  useEffect(() => {
    console.log(window.scrollY);
  });

  return (
    <SharedLayoutWrapper>
      <>
        <Navbar />
        <div className="content-body">
          <main>
            <Outlet />
          </main>
          <aside>
            <Sidebar>{props.sidebar}</Sidebar>
          </aside>
        </div>
      </>
    </SharedLayoutWrapper>
  );
}

const SharedLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  .content-body {
    display: flex;
  }

  main {
    width: calc(100% - 320px);
    background-color: transparent;

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  aside {
    background-color: #eee;
    min-width: 320px;
    max-width: 320px;
    margin-right: 20px;
    right: 0;
    top: 80px;
    height: fit-content;

    /* background-color: red; */
    display: block;
    @media (max-width: 767px) {
      display: none;
    }
  }
`;
