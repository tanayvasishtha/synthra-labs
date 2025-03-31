import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #4B0082 0%, #1A0029 100%);
  color: #FFFFFF;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  position: relative;
  margin-top:-10px;
  padding-top:-10;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 20px;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Highlight = styled.span`
  color: #B980FF;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #8A2BE2;
  color: #FFFFFF;
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  
  &:hover {
    background-color: #FFFFFF;
    color: #4B0082;
  }
`;

const Hero = ({ 
  title, 
  subtitle, 
  primaryButtonText, 
  primaryButtonLink, 
  secondaryButtonText, 
  secondaryButtonLink 
}) => {
  return (
    <HeroSection>
      <HeroContent>
        <Title>
          {title.split(' ').map((word, index) => 
            word.toLowerCase() === 'synthralabs' 
              ? <Highlight key={index}>{word}</Highlight> 
              : `${word} `
          )}
        </Title>
        <Subtitle>{subtitle}</Subtitle>
        <ButtonContainer>
          <PrimaryButton to={primaryButtonLink}>{primaryButtonText}</PrimaryButton>
          <SecondaryButton to={secondaryButtonLink}>{secondaryButtonText}</SecondaryButton>
        </ButtonContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
