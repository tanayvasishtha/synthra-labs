import React from 'react';
import styled from 'styled-components';
import formLinks from '../utils/formLinks';

const PageContainer = styled.div`
  width: 100%;
  background: linear-gradient(135deg, #4B0082 0%, #1A0029 100%);
  color: #FFFFFF;
`;

const PageHeader = styled.section`
  padding: 60px 0 20px;
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

const ContactSection = styled.section`
  padding: 65px 0;
`;

const ContactInfo = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  
  p {
    margin-bottom: 20px;
    font-size: 1.1rem;
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  background-color: #8A2BE2;
  color: #FFFFFF;
  padding: 15px 40px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s;
  text-decoration: none;
  margin-top: 30px;
  
  &:hover {
    background-color: #B980FF;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Contact = () => {
  return (
    <PageContainer>
      <PageHeader>
        <Container>
          <Title>Contact Us</Title>
          <Subtitle>Get in touch with our team</Subtitle>
        </Container>
      </PageHeader>
      
      <ContactSection>
        <Container>
          <ContactInfo>
            <p>Have questions about our internship programs or services? We'd love to hear from you! Fill out our contact form and our team will get back to you as soon as possible.</p>
            <p>For urgent inquiries, you can reach us at <strong>info@synthralabs.in</strong></p>
            <ContactButton href={formLinks.contact} target="_blank" rel="noopener noreferrer">
              Contact Form
            </ContactButton>
          </ContactInfo>
        </Container>
      </ContactSection>
    </PageContainer>
  );
};

export default Contact;
