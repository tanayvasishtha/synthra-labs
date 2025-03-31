import React from 'react';
import styled from 'styled-components';

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
  padding: 0 10px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 15px;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
`;

const AboutContent = styled.section`
  padding: 70px 0;
`;

const AboutText = styled.div`
  margin-bottom: 50px;
  
  h2 {
    color: #B980FF;
    margin-bottom: 20px;
    font-size: 1.8rem;
  }
  
  p {
    margin-bottom: 20px;
    line-height: 1.6;
  }
`;

const TeamSection = styled.div`
  text-align: center;
  
  h2 {
    color: #B980FF;
    margin-bottom: 40px;
    font-size: 1.8rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background-color: #B980FF;
    }
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const TeamMember = styled.div`
  text-align: center;
  
  h3 {
    margin-bottom: 5px;
    color: #B980FF;
  }
  
  p {
    font-size: 0.9rem;
    color: #CCCCCC;
  }
`;

const About = () => {
  return (
    <PageContainer>
      <PageHeader>
        <Container>
          <Title>About Us</Title>
          <Subtitle>Learn More About SynthraLabs & Our Mission</Subtitle>
        </Container>
      </PageHeader>
      
      <AboutContent>
        <Container>
        <AboutText>
  <h2>Our Mission</h2>
  <p>At SynthraLabs, our mission is to deliver innovative technology solutions that empower businesses to thrive in the digital landscape. We combine technical expertise with creative problem-solving to provide high-quality services that exceed client expectations. Through our commitment to excellence, we cultivate the next generation of tech leaders by offering structured internship programs that provide hands-on experience with real-world projects.</p>
  
  <h2>Our Vision</h2>
  <p>We envision becoming the industry standard for technology solutions that drive business transformation and sustainable growth. By fostering a culture of innovation, quality, and continuous learning, we aim to build lasting partnerships with our clients while developing a pipeline of exceptional talent that strengthens both our services and the broader tech community.</p>
</AboutText>

          <TeamSection>
            <h2>Our Team</h2>
            <TeamGrid>
              <TeamMember>
                <h3>Rashmi Madan</h3>
                <p>CEO & Founder</p>
              </TeamMember>
              <TeamMember>
                <h3>Suresh Bharati</h3>
                <p>CTO</p>
              </TeamMember>
              <TeamMember>
                <h3>Rakesh Gupta</h3>
                <p>Head of Operations</p>
              </TeamMember>
            </TeamGrid>
          </TeamSection>
        </Container>
      </AboutContent>
    </PageContainer>
  );
};

export default About;
