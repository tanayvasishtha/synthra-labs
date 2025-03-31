import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100%;
  color: #FFFFFF;
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

const ServicesSection = styled.section`
  padding: 30px 0 70px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  border: 2px solid rgba(138, 43, 226, 0.5);
  border-radius: 10px;
  padding: 30px 20px;
  background-color: rgba(75, 0, 130, 0.3);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
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

const ServiceTitle = styled.h3`
  margin-bottom: 15px;
  color: #B980FF;
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const LearnMore = styled.a`
  display: inline-block;
  color: #B980FF;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s;
  
  &:hover {
    color: #FFFFFF;
  }
`;

const Services = () => {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Web Development',
      description: 'We create modern, responsive, and high-performing websites tailored to your business needs.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'App Development',
      description: 'Our team develops native and cross-platform mobile applications for iOS and Android devices.'
    },
    {
      icon: 'fas fa-comments',
      title: 'Chatbot Development',
      description: 'We build intelligent chatbots that enhance customer engagement and streamline communication.'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Graphic Design',
      description: 'Our graphic designers create visually stunning logos, marketing materials, and UI designs.'
    },
    {
      icon: 'fas fa-pen-fancy',
      title: 'Content Writing',
      description: 'We offer high-quality content writing services for websites, blogs, social media, and more.'
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Digital Marketing',
      description: 'Our digital marketing experts develop strategies that drive traffic, generate leads, and increase conversions.'
    }
  ];
  
  return (
    <PageContainer>
      <PageHeader>
        <Container>
          <Title>Our Services</Title>
          <Subtitle>Explore the services we offer to businesses</Subtitle>
        </Container>
      </PageHeader>
      
      <ServicesSection>
        <Container>
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard key={index}>
                <Icon>
                  <i className={service.icon}></i>
                </Icon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <LearnMore href="https://www.linkedin.com/company/synthralabs">Learn More</LearnMore>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </ServicesSection>
    </PageContainer>
  );
};

export default Services;
