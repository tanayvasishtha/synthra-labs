import React from 'react';
import styled from 'styled-components';

const FeaturesSection = styled.section`
  padding: 80px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: #8A2BE2;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  border: 2px solid rgba(138, 43, 226, 0.5);
  border-radius: 8px;
  padding: 30px;
  background-color: rgba(75, 0, 130, 0.3);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(138, 43, 226, 0.2);
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  color: #8A2BE2;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  margin-bottom: 15px;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
`;

const Features = () => {
  const features = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Real-World Projects',
      description: 'Work on actual client projects that enhance your portfolio'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Certified Experience',
      description: 'Earn recognized certificates upon successful completion'
    },
    {
      icon: 'fas fa-users',
      title: 'Expert Mentorship',
      description: 'Get guidance from industry professionals'
    }
  ];
  
  return (
    <FeaturesSection>
      <Container>
        <SectionTitle>Why Choose SynthraLabs</SectionTitle>
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <Icon>
                <i className={feature.icon}></i>
              </Icon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </Container>
    </FeaturesSection>
  );
};

export default Features;
