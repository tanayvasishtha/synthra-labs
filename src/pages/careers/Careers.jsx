import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  width: 100%;
  color: #FFFFFF;
  position: relative;
  z-index: 1;
`;

const PageHeader = styled.section`
  padding: 60px 0 30px;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 15px;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
`;

const CareersSection = styled.section`
  padding: 70px 0;
`;

const CareersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CareerCard = styled(Link)`
  border: 2px solid rgba(138, 43, 226, 0.5);
  border-radius: 10px;
  padding: 30px 20px;
  background-color: rgba(75, 0, 130, 0.3);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  display: block;
  text-decoration: none;
  color: inherit;
  backdrop-filter: blur(5px);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(138, 43, 226, 0.2);
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  color: #B980FF;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  margin-bottom: 15px;
  color: #B980FF;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

const Careers = () => {
  const careerOptions = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'Internships',
      description: 'Gain practical experience and build your portfolio',
      link: '/careers/internships'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Jobs',
      description: 'Explore job opportunities at SynthraLabs',
      link: '/careers/jobs'
    },
    {
      icon: 'fas fa-users',
      title: 'Campus Ambassador',
      description: 'Represent SynthraLabs on your campus',
      link: '/careers/campus-ambassador'
    }
  ];
  
  return (
    <PageContainer>
      <PageHeader>
        <Container>
          <Title>Careers</Title>
          <Subtitle>Join our team and help shape the future of technology</Subtitle>
        </Container>
      </PageHeader>
      
      <CareersSection>
        <Container>
          <CareersGrid>
            {careerOptions.map((option, index) => (
              <CareerCard key={index} to={option.link}>
                <Icon>
                  <i className={option.icon}></i>
                </Icon>
                <CardTitle>{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CareerCard>
            ))}
          </CareersGrid>
        </Container>
      </CareersSection>
    </PageContainer>
  );
};

export default Careers;
