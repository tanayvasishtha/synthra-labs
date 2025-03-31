import React from 'react';
import styled from 'styled-components';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';

const PageContainer = styled.div`
  width: 100%;
  color: #FFFFFF;
  position: relative;
  z-index: 1;
`;

const Home = () => {
  return (
    <PageContainer>
      <Hero 
        title="Welcome to SynthraLabs"
        subtitle="Delivering Innovative Tech Solutions with Excellence"
        primaryButtonText="Explore Internships"
        primaryButtonLink="/careers/internships"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
      />
      <Features />
    </PageContainer>
  );
};

export default Home;
