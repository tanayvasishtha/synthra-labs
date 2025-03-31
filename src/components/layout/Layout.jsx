import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import TechBackground from '../effects/TechBackground';

const LayoutContainer = styled.div`
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

const Main = styled.main`
  min-height: calc(100vh - 150px);
  padding-top: 60px;
  position: relative;
  z-index: 1;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <TechBackground />
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
